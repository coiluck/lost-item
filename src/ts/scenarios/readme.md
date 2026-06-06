# シナリオ Markdown 書式

`md/*.md` を `compile.py` で `.ts` (engine の `ScenarioFile`) に変換します。

## ビルド

```sh
cd src/ts/scenarios/md
python compile.py chapter01.md
# -> ../chapter01.ts に出力
```

## ファイル全体の形

```markdown
---
id: chapter01
next: chapter02
---

(ここにシナリオ本文)
```

### frontmatter

| キー  | 必須 | 意味                                          |
| ----- | ---- | --------------------------------------------- |
| id    | yes  | シナリオID。`registry[id]` のキーになる        |
| next  | no   | 終端到達後にジャンプする次のシナリオID         |

`#` で始まる行はコメント扱いで無視されます (frontmatter / 本文ともに)。
`#` を行頭に置けば Markdown の見出しを書いてもコンパイルされません。

## 段落 = 1 ScenarioLine

「連続する非空行」が 1 段落、これが engine の 1 `ScenarioLine` に対応します。
段落は空行で区切ります。

```markdown
@bg: park.jpg
@bgm: peaceful
Alice: こんにちは

これはナレーション。

@se: ding
Alice: 続き
```

→ 3 つの `ScenarioLine`:

1. `bg`, `bgm` コマンドつき。speaker=`Alice`, text=`こんにちは`
2. text=`これはナレーション。` (speaker なし)
3. `se` コマンドつき。speaker=`Alice`, text=`続き`

### テキスト行

- `話者: 本文` → speaker と text に分割される
  - 最初の `: ` (コロン + 空白) より前が話者、後ろが本文
  - 話者は空白も `:` も含まない 1 文字以上で始まる必要あり
- それ以外の行 → speaker 無しの地の文として扱う
  - 例: `AM 10:00 です。` は地の文 (コロンの後ろにスペースが無いので)

1 段落に複数のテキスト行は書けません (エラーになります)。

### コマンド行

`@命令名: 引数1, 引数2, ...` の形で書きます。引数なしの命令は `:` も省略可。

例:

```markdown
@bg: park.jpg
@bg: park.jpg, crossfade
@bgm: peaceful
@bgm: -                  # bgm 停止 (null)
@char: alice, smile
@char: alice, smile, face
@char: alice, smile, bounce        # 表示中の立ち絵をはねさせる (話している演出)
@char: alice, smile, face, bounce
@charDelete              # 全キャラ消去
@charDelete: alice
@bgMove: leftToRight, 1000
@bgShake: 500, 10
@bgmFadeOut
@bgmFadeOut: 2000
@se: ding
@wait: 500
@nextChapter: 3, day3.png
```

#### 命令一覧 (engine の型と1対1対応)

| 命令          | 必須引数                       | 任意引数              | 種別      |
| ------------- | ------------------------------ | --------------------- | --------- |
| `@bg`         | `file`                         | `transition`          | stateful  |
| `@bgm`        | `file` (`-` で null)           | —                     | stateful  |
| `@char`       | `id`, `pose`                   | `face`, `bounce` (旗)  | stateful  |
| `@charDelete` | —                              | `id`                  | stateful  |
| `@bgMove`     | `direction`, `duration` (ms)   | —                     | transient |
| `@bgShake`    | `duration`, `intensity`        | —                     | transient |
| `@bgmFadeOut` | —                              | `duration` (default 1000) | transient |
| `@se`         | `file`                         | —                     | transient |
| `@wait`       | `ms`                           | —                     | transient |
| `@nextChapter`    | `day`, `backgroundImage`       | —                     | transient |

- `@bg` の `transition` は `fade` / `crossfade` / `none`。省略時は `fade`。
- `@bgMove` の `direction` は `leftToRight` / `rightToLeft` / `topToBottom` / `bottomToTop`。
- `@char` の `id`, `pose` に続けて旗 `face` / `bounce` を任意個・順不同で渡せる。
  - `bounce`: その行で立ち絵をはねさせ、話している雰囲気を出す。ポーズ変更の有無は問わない。

### コマンドだけの段落

テキスト行のない段落も許可されます。`text: ''` の ScenarioLine になります。

```markdown
@wait: 1000
@charDelete

次の台詞。
```

## 選択肢

```markdown
? greeting

- はい
    @bg: warm.png
    Alice: 良かった

- いいえ
    @bg: cold.png
    Alice: そっか

ここから本編に戻る。
```

- `? <choiceId>` を 1 行で書くと選択肢ブロックを開く
  - 同じシナリオ内で同じ `choiceId` を 2 回使うとエラー
- `- <ボタン文字列>` で 1 つの branch を開く
- branch の中身は **4 スペースのインデント** で書く
- インデントが 1 段戻った行で選択肢ブロックが閉じる

選択肢ブロックは、engine 側では「`{ text: '', choiceId }` を持つマーカー行」+ `choices[id]` のエントリにコンパイルされます。マーカー行自体には text を出さないので、選択肢ウィンドウの背後には直前の台詞が残ります。

### branch ごとに別シナリオへジャンプする (`-> id`)

branch ヘッダの末尾に `-> シナリオID` を書くと、その branch を抜けた時点で `next` シナリオへジャンプします (親フローには戻りません)。`-> id` を省略した branch は従来通り親へ戻ります。

```markdown
? ending

- 良い結末 -> good_ending
    Alice: ありがとう

- 悪い結末 -> bad_ending
    Alice: ...

- 続ける
    Alice: もう少しだけ
```

- `id` は ASCII の識別子 (`[A-Za-z_]\w*`) のみ。日本語等は不可
- ジャンプ時点で外側の branch スタックは全て破棄されます。入れ子の内側 branch から `-> id` した場合も同じく外側へは戻りません

### choice の入れ子

branch の中にさらに `? id` を書けます。インデントは「branch のインデント + 4」になります。

```markdown
? outer

- A
    Alice: A を選んだ
    ? inner_a
    - X
        Alice: X
    - Y
        Alice: Y
    Alice: A 終わり

- B
    Alice: B を選んだ
```

- 全ての choiceId は **シナリオ全体で一意** にしてください (engine の `choices` は scenario レベルで flat)
- 入れ子の深さに制限はなし

## エラー例

| メッセージ                          | 原因                                       |
| ----------------------------------- | ------------------------------------------ |
| `frontmatter が必要です`            | `---` から始まっていない                   |
| `frontmatter に id が必要です`      | `id:` を書き忘れた                         |
| `未知のコマンド: @xxx`              | `COMMAND_SCHEMA` に無い命令を使った        |
| `@bg は 1 個の引数が必要`           | 必須引数が足りない                         |
| `段落内にテキスト行が2つ以上`       | 1 段落に 2 行以上の話者付き/地の文を書いた |
| `choiceId が重複`                   | 同じ `? id` を 2 回書いた                  |
| `予期せぬインデント (期待: N 列)`   | 期待していない深さで indent された行       |
| `branch のボタン文字列が空`         | `- -> id` のように本文が無い               |
| `パースしきれない行`                | 文書末に解釈できないトークンが残った       |

## 完全な例

```markdown
---
id: chapter01
next: chapter02
---

# ====== 公園のシーン ======

@bg: park.jpg
@bgm: peaceful
Alice: こんにちは、世界

これはナレーションです。

@char: alice, smile, face
@se: ding
Alice: 話しかけてみる

@wait: 500

? greeting

- はい
    @bg: warm.png
    Alice: 良かった!

- いいえ
    @bg: cold.png
    Alice: そっか...

@bgmFadeOut: 2000
ナレーション (本編に戻る)。

@nextChapter: 2, day2.png
次の日。
```
