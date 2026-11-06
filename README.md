# SoloCode

ブラウザで動作する、オフライン対応のコードエディタです。インストールやビルドは不要です。

## 使い方

リポジトリをダウンロードし、ファイルを同じフォルダに置いたまま `index.html` をブラウザで開いてください。初期画面の「開く」またはドラッグ＆ドロップでファイルを開けます。

ブラウザが File System Access API に対応している場合は元のファイルに直接保存できます。対応していない場合はダウンロードとして保存されます。フォルダの編集機能もブラウザの対応状況と権限に依存します。

## 主な機能

- 複数タブ、最大 3 ペインの左右分割、タブのドラッグ移動
- フォルダツリーからのファイル表示・作成・名前変更・削除
- 検索・置換、行移動、元に戻す・やり直す
- Markdown の整形表示。選択中の行や表などのブロックは原文を表示して編集
- UTF-8（BOM 対応）・Shift_JIS、LF・CRLF の読み込みと保存
- ダーク／ライトテーマ、文字サイズと折り返しの変更

対応言語モード: C#、Python、JavaScript、TypeScript、Vue、HTML、CSS、VBA / VB、Markdown、JSON、SQL、XML、プレーンテキスト。

## ショートカット

| 操作 | キー |
| --- | --- |
| ファイルを開く | Ctrl+O |
| 保存 / 別名保存 | Ctrl+S / Ctrl+Shift+S |
| 新規タブ / タブを閉じる | Ctrl+Alt+N / Ctrl+Alt+W |
| 検索・置換 | Ctrl+F |
| 行へ移動 | Alt+G |
| サイドバー表示切替 | Ctrl+B |
| ペインの分割・移動 | Ctrl+Alt+← / → |

## ファイル構成

- `index.html`、`style.css`: 画面の構造とスタイル
- `app.js`: エディタ、タブ、ファイル操作などのアプリ本体
- `markdown-preview.js`: Markdown の整形表示と編集の切替
- `vendor.js`: CodeMirror などのエディタ用ライブラリ
- `marked.umd.js`、`purify.min.js`: Markdown の描画と HTML のサニタイズ
- `CODEMIRROR-API.md`: CodeMirror 拡張 API のメモ

Markdown の画像などに外部 URL を指定した場合、その表示にはネットワーク接続が必要です。

## 使用ライブラリ

Markdown の描画に [Marked](https://github.com/markedjs/marked)、HTML のサニタイズに [DOMPurify](https://github.com/cure53/DOMPurify) を使用しています。それぞれのライセンスは `MARKED-LICENSE.txt` と `DOMPURIFY-LICENSE.txt` を参照してください。エディタには CodeMirror を使用しています。
