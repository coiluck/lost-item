#!/usr/bin/env python3
"""シナリオ Markdown を engine 用 ScenarioFile.ts へコンパイル。

使い方:
    python compile.py <FILE.md>

出力先: <FILE.md の親フォルダの親> / <FILE.stem>.ts
        (= src/ts/scenarios/md/foo.md → src/ts/scenarios/foo.ts)

書式は ../readme.md を参照。
"""

from __future__ import annotations
import re
import sys
from pathlib import Path

# Windowsのcp932コンソールでも日本語エラーが文字化けしないように
for _stream in (sys.stdout, sys.stderr):
    if hasattr(_stream, 'reconfigure'):
        try:
            _stream.reconfigure(encoding='utf-8')
        except Exception:
            pass


# ============================================================
# コマンド定義 — engine の StatefulCommand / TransientCommand と一致させる
# ============================================================

def _str(s: str) -> str: return s.strip()
def _int(s: str) -> int: return int(s.strip())
def _bool(s: str) -> bool: return s.strip().lower() in ('true', '1', 'face', 'withface', 'yes')
def _str_or_null(s: str):
    v = s.strip()
    return None if v in ('-', 'null', '') else v


# name → (required_args, optional_args)
# 各 arg は (key, parser) のタプル。位置引数 (カンマ区切り) で受ける。
COMMAND_SCHEMA = {
    'bg':         ([('file', _str)],                           [('transition', _str)]),
    'charDelete': ([],                                          [('id', _str)]),
    'bgm':        ([('file', _str_or_null)],                   []),
    'bgMove':     ([('direction', _str), ('duration', _int)],  []),
    'bgShake':    ([('duration', _int), ('intensity', _int)],  []),
    'bgmFadeOut': ([],                                          [('duration', _int)]),
    'se':         ([('file', _str)],                           []),
    'wait':       ([('ms', _int)],                             []),
    'nextChapter':    ([('chapter', _int), ('backgroundImage', _str)], []),
}


# @char の id, pose に続く任意の旗。書いた旗だけ True になる。
CHAR_FLAGS = {'face': 'withFace', 'withface': 'withFace', 'bounce': 'bounce'}


def parse_char(args_raw: str) -> dict:
    parts = [p.strip() for p in args_raw.split(',')] if args_raw else []
    if len(parts) < 2 or not parts[0] or not parts[1]:
        raise ValueError(f"@char は id, pose が必要 (got {args_raw!r})")
    out: dict = {'type': 'char', 'id': parts[0], 'pose': parts[1]}
    for flag in parts[2:]:
        if not flag:
            continue
        key = CHAR_FLAGS.get(flag.lower())
        if key is None:
            raise ValueError(f"@char の不明な旗: {flag!r} (face / bounce)")
        out[key] = True
    return out


def parse_command(raw: str) -> dict:
    m = re.match(r'^@(\w+)\s*(?::\s*(.*))?$', raw.strip())
    if not m:
        raise ValueError(f"不正なコマンド構文: {raw!r}")
    name = m.group(1)
    args_raw = (m.group(2) or '').strip()
    if name == 'char':
        return parse_char(args_raw)
    schema = COMMAND_SCHEMA.get(name)
    if schema is None:
        raise ValueError(f"未知のコマンド: @{name}")
    required, optional = schema
    parts = [p for p in args_raw.split(',')] if args_raw else []
    if len(parts) < len(required):
        raise ValueError(f"@{name} は {len(required)} 個の引数が必要 (got {len(parts)})")
    if len(parts) > len(required) + len(optional):
        raise ValueError(f"@{name} の引数が多すぎ (max {len(required) + len(optional)})")
    out: dict = {'type': name}
    for (key, parser), val in zip(required, parts):
        out[key] = parser(val)
    for (key, parser), val in zip(optional, parts[len(required):]):
        out[key] = parser(val)
    return out


# ============================================================
# Markdown パース
# ============================================================

FRONTMATTER_RE = re.compile(r'\A---\s*\n(.*?)\n---\s*(?:\n|$)(.*)\Z', re.DOTALL)
SPEAKER_RE = re.compile(r'^([^\s:][^:]*?):\s+(.*)$')
# `- ボタン文字列 -> nextScenarioId` の解析。next は任意、ASCII識別子のみ許可。
BRANCH_RE = re.compile(r'^(.+?)(?:\s+->\s+([A-Za-z_]\w*))?\s*$')
BRANCH_INDENT = 4


def extract_frontmatter(text: str) -> tuple[dict, str]:
    m = FRONTMATTER_RE.match(text)
    if not m:
        raise ValueError("frontmatter (---..---) がファイル冒頭に必要です")
    front_raw, body = m.group(1), m.group(2)
    front: dict = {}
    for raw in front_raw.splitlines():
        line = raw.strip()
        if not line or line.startswith('#'):
            continue
        if ':' not in line:
            raise ValueError(f"frontmatter 行が不正: {raw!r}")
        key, _, val = line.partition(':')
        front[key.strip()] = val.strip()
    if 'id' not in front:
        raise ValueError("frontmatter に id が必要です")
    return front, body


def strip_comments(lines: list[str]) -> list[str]:
    """`#` で始まる行を除去 (インデントを保ったまま)。"""
    return [l for l in lines if not l.lstrip().startswith('#')]


def parse_text_line(s: str) -> tuple[str | None, str]:
    m = SPEAKER_RE.match(s)
    return (m.group(1), m.group(2)) if m else (None, s)


def paragraph_to_line(para: list[str]) -> dict:
    """連続する非空行 (1段落) を 1 ScenarioLine に変換。"""
    commands: list[dict] = []
    text = ''
    speaker: str | None = None
    text_seen = False
    for raw in para:
        s = raw.strip()
        if s.startswith('@'):
            commands.append(parse_command(s))
            continue
        if text_seen:
            raise ValueError(f"段落内にテキスト行が2つ以上あります: {para!r}")
        text_seen = True
        sp, tx = parse_text_line(s)
        if sp is not None:
            speaker = sp
        text = tx
    out: dict = {'text': text}
    if speaker is not None:
        out['speaker'] = speaker
    if commands:
        out['commands'] = commands
    return out


class _Parser:
    """body を上から1パスで走査するインデント感受性パーサ。

    parse_block(indent) と _parse_choice_branches(indent) を相互再帰させ、
    `? id` ブロックの入れ子を扱う。choices は scenario レベルで flat に保つ
    (engine の resolveCursor が `top.scenarioId` でルックアップするため)。
    """

    def __init__(self, lines: list[str]):
        self.lines = lines
        self.i = 0
        self.choices: dict = {}

    def _eof(self) -> bool:
        return self.i >= len(self.lines)

    def _skip_blank(self) -> None:
        while not self._eof() and not self.lines[self.i].strip():
            self.i += 1

    def _collect_paragraph(self, indent: int) -> list[str]:
        """ちょうど `indent` 列で始まる連続した非空行を集める。"""
        prefix = ' ' * indent
        para: list[str] = []
        while not self._eof():
            ln = self.lines[self.i]
            if not ln.strip():
                break
            if not ln.startswith(prefix):
                break
            content = ln[indent:]
            if content.startswith(' '):
                break  # 過剰インデント -> 上位で処理 (エラーになる)
            if content.startswith('? ') or content.startswith('- '):
                break
            para.append(content.rstrip())
            self.i += 1
        return para

    def _parse_choice_branches(self, indent: int, choice_id: str) -> list[dict]:
        prefix = ' ' * indent
        branches: list[dict] = []
        while not self._eof():
            self._skip_blank()
            if self._eof():
                break
            ln = self.lines[self.i]
            if not ln.startswith(prefix):
                break  # 外側スコープへ戻った
            content = ln[indent:]
            if not content.startswith('- '):
                break  # choice ブロック終了 (次のparagraph/choice等は上位が処理)
            raw = content[2:].rstrip()
            m = BRANCH_RE.match(raw)
            if not m:
                raise ValueError(f"branch ヘッダが不正: {ln!r}")
            button = m.group(1).strip()
            next_id = m.group(2)
            if not button:
                raise ValueError(f"branch のボタン文字列が空: {ln!r}")
            self.i += 1
            body = self.parse_block(indent + BRANCH_INDENT)
            branch: dict = {'buttonText': button, 'branch': body}
            if next_id:
                branch['next'] = next_id
            branches.append(branch)
        if not branches:
            raise ValueError(f"choice '{choice_id}' に branch がありません")
        return branches

    def parse_block(self, indent: int) -> list[dict]:
        """この indent レベルの paragraph と choice ブロックを ScenarioLine 配列で返す。"""
        prefix = ' ' * indent
        out: list[dict] = []
        while not self._eof():
            self._skip_blank()
            if self._eof():
                break
            ln = self.lines[self.i]
            if not ln.startswith(prefix):
                break  # 外側スコープへ
            content = ln[indent:]
            if content.startswith(' '):
                raise ValueError(f"予期せぬインデント (期待: {indent} 列): {ln!r}")
            if content.startswith('? '):
                choice_id = content[2:].strip()
                if choice_id in self.choices:
                    raise ValueError(f"choiceId が重複: {choice_id}")
                self.i += 1
                self.choices[choice_id] = self._parse_choice_branches(indent, choice_id)
                out.append({'text': '', 'choiceId': choice_id})
                continue
            if content.startswith('- '):
                break  # 外側の choice の branch マーカー
            para = self._collect_paragraph(indent)
            if para:
                out.append(paragraph_to_line(para))
        return out

    def parse(self) -> tuple[list[dict], dict]:
        lines = self.parse_block(0)
        self._skip_blank()
        if not self._eof():
            raise ValueError(f"パースしきれない行: {self.lines[self.i]!r}")
        return lines, self.choices


def parse_body(body: str) -> tuple[list[dict], dict]:
    lines = strip_comments(body.splitlines())
    return _Parser(lines).parse()


# ============================================================
# TypeScript 出力
# ============================================================

JS_IDENT_RE = re.compile(r'^[A-Za-z_$][\w$]*$')


def js_string(s: str) -> str:
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n') + "'"


def js_key(k: str) -> str:
    return k if JS_IDENT_RE.match(k) else js_string(k)


def ts_value(v, indent: int = 0) -> str:
    pad = '  ' * indent
    inner = '  ' * (indent + 1)
    if v is None:
        return 'null'
    if isinstance(v, bool):
        return 'true' if v else 'false'
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, str):
        return js_string(v)
    if isinstance(v, list):
        if not v:
            return '[]'
        items = [inner + ts_value(x, indent + 1) for x in v]
        return '[\n' + ',\n'.join(items) + ',\n' + pad + ']'
    if isinstance(v, dict):
        if not v:
            return '{}'
        items = [f'{inner}{js_key(k)}: {ts_value(val, indent + 1)}' for k, val in v.items()]
        return '{\n' + ',\n'.join(items) + ',\n' + pad + '}'
    raise TypeError(f"Unsupported value: {type(v).__name__}")


def generate_ts(scenario: dict, src_name: str) -> str:
    return (
        f"// AUTO-GENERATED from {src_name}. Do not edit by hand.\n"
        f"import type {{ ScenarioFile }} from '../engine/types';\n"
        f"\n"
        f"const scenario: ScenarioFile = {ts_value(scenario)};\n"
        f"\n"
        f"export default scenario;\n"
    )


# ============================================================
# main
# ============================================================

def compile_file(src: Path) -> Path:
    src = src.resolve()
    text = src.read_text(encoding='utf-8')
    front, body = extract_frontmatter(text)
    lines, choices = parse_body(body)
    scenario: dict = {'id': front['id']}
    if 'next' in front:
        scenario['next'] = front['next']
    scenario['lines'] = lines
    if choices:
        scenario['choices'] = choices
    out_path = src.parent.parent / (src.stem + '.ts')
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(generate_ts(scenario, src.name), encoding='utf-8')
    return out_path


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print("使い方: python compile.py <FILE.md>", file=sys.stderr)
        return 2
    src = Path(argv[1])
    if src.suffix != '.md':
        print("拡張子は .md である必要があります", file=sys.stderr)
        return 2
    if not src.exists():
        print(f"ファイルが見つかりません: {src}", file=sys.stderr)
        return 2
    try:
        out = compile_file(src)
    except ValueError as e:
        print(f"コンパイルエラー: {e}", file=sys.stderr)
        return 1
    print(f"-> {out}")
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
