(() => {
  const { Decoration, WidgetType, StateField, P, syntaxTree } = SoloCodeVendor;

  class MarkdownPreview extends WidgetType {
    constructor(source, from, inline) { super(); this.source = source; this.from = from; this.inline = inline; }
    eq(other) { return this.source === other.source && this.from === other.from && this.inline === other.inline; }
    toDOM(view) {
      const element = document.createElement(this.inline ? 'span' : 'div');
      element.className = 'markdown-preview' + (this.inline ? ' markdown-preview-line' : ' markdown-preview-block');
      const html = this.inline ? marked.parseInline(this.source, { gfm: true }) : marked.parse(this.source, { gfm: true });
      element.innerHTML = DOMPurify.sanitize(html, { FORBID_TAGS: ['style', 'script', 'iframe', 'object', 'embed', 'form'], FORBID_ATTR: ['style'] });
      element.addEventListener('click', event => event.preventDefault());
      element.addEventListener('mousedown', event => {
        if (event.button !== 0) return;
        event.preventDefault();
        view.dispatch({ selection: { anchor: this.from }, scrollIntoView: true });
        view.focus();
      });
      return element;
    }
    ignoreEvent() { return false; }
  }

  function decorations(state) {
    const ranges = [], selections = state.selection.ranges;
    function selected(from, to) {
      return selections.some(range => range.from <= to && range.to >= from);
    }
    function add(from, to, inline) {
      if (from >= to || selected(from, to)) return;
      const source = state.doc.sliceString(from, to);
      ranges.push(Decoration.replace({ widget: new MarkdownPreview(source, from, inline), block: !inline }).range(from, to));
    }
    const tree = syntaxTree(state);
    for (let node = tree.topNode.firstChild; node; node = node.nextSibling) {
      if (node.name === 'Paragraph') {
        let line = state.doc.lineAt(node.from);
        while (line.from < node.to) {
          add(Math.max(line.from, node.from), Math.min(line.to, node.to), true);
          if (line.number >= state.doc.lines) break;
          line = state.doc.line(line.number + 1);
        }
      } else add(node.from, node.to, false);
    }
    return Decoration.set(ranges, true);
  }

  const preview = StateField.define({
    create: decorations,
    update(value, transaction) {
      if (transaction.docChanged || transaction.selection || syntaxTree(transaction.startState) !== syntaxTree(transaction.state)) return decorations(transaction.state);
      return value;
    },
    provide: field => P.decorations.from(field),
  });
  globalThis.SoloCodeMarkdownPreview = preview;
})();
