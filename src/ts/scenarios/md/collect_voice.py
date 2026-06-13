#!/usr/bin/env python3
"""@voice のついた行を声ID ごとに集めて voice/<声ID>.md を生成。

使い方:
    python collect_voice.py

同じフォルダの *.md を全て走査し、@voice のついた行を声ID ごとにまとめて
voice/<声ID>.md へ書き出す。各行は `本文,ファイル名` の形式:

    これが発言です。,1-1
    これは二番目。,1-2
    これは次の章。,2-1

ファイル名 (連番) の割り当ては compile.py と同じロジックを共有する。
"""

from __future__ import annotations
import sys
from pathlib import Path

import compile  # 同階層の compile.py

# Windowsのcp932コンソールでも日本語が文字化けしないように
for _stream in (sys.stdout, sys.stderr):
    if hasattr(_stream, 'reconfigure'):
        try:
            _stream.reconfigure(encoding='utf-8')
        except Exception:
            pass


def _sort_key(p: Path):
    """数字名 (1.md..8.md) を数値順、その他を名前順に並べる。"""
    return (0, int(p.stem), '') if p.stem.isdigit() else (1, 0, p.stem)


def collect(md_dir: Path) -> dict[str, list[tuple[str, str]]]:
    """声ID -> [(本文, ファイル名), ...] (文書順)。"""
    by_voice: dict[str, list[tuple[str, str]]] = {}
    for md in sorted(md_dir.glob('*.md'), key=_sort_key):
        text = md.read_text(encoding='utf-8')
        try:
            _front, body = compile.extract_frontmatter(text)
            lines, choices = compile.parse_body(body)
        except ValueError as e:
            print(f"スキップ {md.name}: {e}", file=sys.stderr)
            continue
        for ln, vid, name in compile.iter_voice_assignments(lines, choices, md.stem):
            by_voice.setdefault(vid, []).append((ln['text'], name))
    return by_voice


def main(argv: list[str]) -> int:
    md_dir = Path(__file__).resolve().parent
    out_dir = md_dir / 'voice'
    by_voice = collect(md_dir)
    if not by_voice:
        print("@voice の行が見つかりませんでした")
        return 0
    out_dir.mkdir(parents=True, exist_ok=True)
    for vid, entries in by_voice.items():
        body = '\n'.join(f'{text},{name}' for text, name in entries) + '\n'
        (out_dir / f'{vid}.md').write_text(body, encoding='utf-8')
        print(f"-> voice/{vid}.md ({len(entries)} 行)")
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
