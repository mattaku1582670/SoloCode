# CodeMirror の拡張 API

`vendor.js` の `SoloCodeVendor` は、既存アプリが使う内部識別子に加え、次の名前付き API を公開しています。いずれも同じ CodeMirror インスタンスから取得しています。

- `Decoration`: テキストの装飾や置換表示
- `WidgetType`: 置換表示に使う DOM の定義
- `StateField`: 文書・選択の更新に伴う装飾状態の管理。複数行のブロック装飾にも利用可能
- `ViewPlugin`: ビューの更新やイベントに連動する拡張
- `syntaxTree(state)`: 現在解析済みの構文木。Markdown モードでは表などのノードを取得可能
- `P`: EditorView、`te`: EditorState、`Nt`: Compartment（既存の短い名前）

Markdown モードは `B5({ extensions: [bs] })` で作成しています。言語モードは `app.js` の `Tn` Compartment で切り替えられます。表示機能を追加する際は、Markdown 以外に影響しないよう、この切り替えと連動させてください。

構文木は段階的に解析されるため、大きな文書では常に全文が解析済みとは限りません。表示実装では未解析部分の扱いと解析の進行に対応してください。原文、保存、検索、選択、元に戻す操作を保ち、装飾は表示だけに適用します。
