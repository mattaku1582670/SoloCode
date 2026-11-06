(() => {
  const {
    F6,
    Vd,
    Nt,
    te,
    P,
    ei,
    Tf,
    Xf,
    Rf,
    Zf,
    qf,
    Lf,
    Uf,
    Yf,
    qt,
    gu,
    bu,
    ku,
    Lr,
    wu,
    _u,
    ji,
    Hu,
    Wr,
    jx,
    e8,
    Q8,
    k8,
    X8,
    q8,
    V8,
    ls,
    G8,
    i9,
    Kx,
    L9,
    As,
    xx,
    bs,
    B5,
    m5,
    X5,
    j5,
    J5,
    cd,
    fd,
  } = globalThis.SoloCodeVendor;
  var ox = F6(Vd()),
    mi = {
      plain: { label: "\u30C6\u30AD\u30B9\u30C8", ext: [], load: () => [] },
      csharp: { label: "C#", ext: ["cs"], load: () => ji.define(J5) },
      python: { label: "Python", ext: ["py", "pyw"], load: () => L9() },
      javascript: {
        label: "JavaScript",
        ext: ["js", "mjs", "cjs"],
        load: () => Kx(),
      },
      typescript: {
        label: "TypeScript",
        ext: ["ts"],
        load: () => Kx({ typescript: !0 }),
      },
      vue: { label: "Vue", ext: ["vue"], load: () => j5() },
      html: { label: "HTML", ext: ["html", "htm"], load: () => xx() },
      css: { label: "CSS", ext: ["css"], load: () => As() },
      vba: {
        label: "VBA / VB",
        ext: ["vba", "bas", "cls", "frm", "vbs", "vb"],
        load: () => ji.define(cd),
      },
      markdown: {
        label: "Markdown",
        ext: ["md", "markdown"],
        load: () => [B5({ extensions: [bs] }), globalThis.SoloCodeMarkdownPreview],
      },
      json: { label: "JSON", ext: ["json"], load: () => m5() },
      sql: { label: "SQL", ext: ["sql"], load: () => X5() },
      xml: {
        label: "XML",
        ext: ["xml", "csproj", "config", "xaml"],
        load: () => ji.define(fd),
      },
    },
    cc = (i) => {
      let e = (i.split(".").pop() || "").toLowerCase();
      for (let [t, x] of Object.entries(mi)) if (x.ext.includes(e)) return t;
      return "plain";
    },
    Wt = {
      get(i, e) {
        try {
          let t = localStorage.getItem("solocode:" + i);
          return t === null ? e : JSON.parse(t);
        } catch {
          return e;
        }
      },
      set(i, e) {
        try {
          localStorage.setItem("solocode:" + i, JSON.stringify(e));
        } catch {}
      },
    },
    se = {
      theme: Wt.get("theme", "dark"),
      fontSize: Wt.get("fontSize", 14),
      wrap: Wt.get("wrap", !1),
      sidebarVisible: Wt.get("sidebarVisible", !0),
      sidebarWidth: Wt.get("sidebarWidth", 240),
    },
    Tn = new Nt(),
    hc = new Nt(),
    fc = new Nt(),
    uc = new Nt(),
    OF = te.phrases.of({
      Find: "\u691C\u7D22",
      Replace: "\u7F6E\u63DB",
      next: "\u6B21\u3078",
      previous: "\u524D\u3078",
      all: "\u3059\u3079\u3066\u9078\u629E",
      "match case": "\u5927/\u5C0F\u533A\u5225",
      "by word": "\u5358\u8A9E\u5358\u4F4D",
      regexp: "\u6B63\u898F\u8868\u73FE",
      replace: "\u7F6E\u63DB",
      "replace all": "\u3059\u3079\u3066\u7F6E\u63DB",
      close: "\u9589\u3058\u308B",
      "Go to line": "\u884C\u3078\u79FB\u52D5",
      go: "\u79FB\u52D5",
    }),
    dF = [Lr(wu, { fallback: !0 })],
    Oc = () => (se.theme === "dark" ? i9 : dF),
    dc = () => P.theme({ "&": { fontSize: se.fontSize + "px" } }),
    Ac = () => (se.wrap ? P.lineWrapping : []);
  function AF(i) {
    return [
      Uf(),
      Yf(),
      Rf(),
      Hu(),
      ku(),
      Tf(),
      Xf(),
      te.allowMultipleSelections.of(!0),
      gu(),
      _u(),
      X8(),
      qf(),
      Lf(),
      Zf(),
      V8(),
      qt.of("    "),
      ei.of([...q8, ...Q8, ...G8, ...e8, ...bu, k8]),
      OF,
      Tn.of(mi[i].load()),
      hc.of(Oc()),
      uc.of(dc()),
      fc.of(Ac()),
      P.updateListener.of(DF),
    ];
  }
  var Ud = 3,
    q0 = 200,
    K = [],
    It = null,
    BF = 1,
    pF = 1,
    mF = 0,
    Gs = new Map(),
    W = (i) => document.querySelector(i);
  function Hs(i) {
    return K.find((e) => e.id === i) || null;
  }
  function Mt() {
    return Hs(It);
  }
  function Js() {
    return K.flatMap((i) => i.tabs);
  }
  function Ex(i) {
    return K.find((e) => e.tabs.some((t) => t.id === i)) || null;
  }
  function Bt() {
    let i = Mt();
    return (i && i.tabs.find((e) => e.id === i.activeTabId)) || null;
  }
  function Bc(i, e) {
    i && e && i.activeTabId === e.id && (e.state = i.view.state);
  }
  function gF(i) {
    let e = document.createElement("div");
    ((e.className = "pane"), (e.style.flex = "100 1 0%"));
    let t = document.createElement("div");
    t.className = "pane-tabbar";
    let x = document.createElement("div");
    ((x.className = "pane-editor"),
      x.appendChild(i.view.dom),
      e.appendChild(t),
      e.appendChild(x),
      (i.el = e),
      (i.tabbarEl = t),
      (i.editorEl = x));
  }
  function e6() {
    let i = {
      id: pF++,
      tabs: [],
      activeTabId: null,
      view: null,
      el: null,
      tabbarEl: null,
      editorEl: null,
      flexBasis: 100,
    };
    return ((i.view = new P({ parent: null })), Gs.set(i.view, i), gF(i), i);
  }
  function t6() {
    for (let i of K)
      ((i.flexBasis = 100), i.el && (i.el.style.flex = "100 1 0%"));
  }
  function pc() {
    for (let i of K) i.el && i.el.classList.toggle("active-pane", i.id === It);
  }
  function CF(i, e, t) {
    let x = new AbortController(),
      n = !1,
      r = 0,
      s = 0,
      o = 0;
    (i.addEventListener(
      "mousedown",
      (l) => {
        ((n = !0),
          i.classList.add("dragging"),
          (r = l.clientX),
          (s = e.el.getBoundingClientRect().width),
          (o = t.el.getBoundingClientRect().width),
          l.preventDefault());
      },
      { signal: x.signal },
    ),
      window.addEventListener(
        "mousemove",
        (l) => {
          if (!n) return;
          let a = l.clientX - r,
            E = s + a,
            c = o - a;
          (E < q0 && ((c -= q0 - E), (E = q0)),
            c < q0 && ((E -= q0 - c), (c = q0)),
            !(E < q0 || c < q0) &&
              ((e.el.style.flex = `${E} 1 0%`),
              (t.el.style.flex = `${c} 1 0%`)));
        },
        { signal: x.signal },
      ),
      window.addEventListener(
        "mouseup",
        () => {
          n &&
            ((n = !1),
            i.classList.remove("dragging"),
            (e.flexBasis = parseFloat(e.el.style.flex)),
            (t.flexBasis = parseFloat(t.el.style.flex)));
        },
        { signal: x.signal },
      ),
      (i._cleanup = () => x.abort()));
  }
  function mc() {
    let i = W("#pane-container");
    (i.querySelectorAll(".pane-resizer").forEach((e) => {
      e._cleanup && e._cleanup();
    }),
      (i.innerHTML = ""),
      K.forEach((e, t) => {
        if (t > 0) {
          let x = document.createElement("div");
          ((x.className = "pane-resizer"),
            CF(x, K[t - 1], e),
            i.appendChild(x));
        }
        i.appendChild(e.el);
      }),
      pc());
  }
  function lx(
    {
      name: i,
      content: e = "",
      handle: t = null,
      encoding: x = "UTF8",
      eol: n = "LF",
      bom: r = !1,
      lang: s = null,
    } = {},
    o = null,
  ) {
    let l = Hs(o) || Mt();
    i || (i = `\u7121\u984C-${++mF}.txt`);
    let a = s || cc(i),
      E = {
        id: BF++,
        name: i,
        handle: t,
        lang: a,
        encoding: x,
        eol: n,
        bom: r,
        dirty: !1,
        orphaned: !1,
        state: te.create({ doc: e, extensions: AF(a) }),
      };
    return (l.tabs.push(E), Vt(l.id, E.id), E);
  }
  function Vt(i, e) {
    let t = Hs(i);
    if (!t) return;
    let x = t.tabs.find((r) => r.id === t.activeTabId);
    (x && (x.state = t.view.state), (t.activeTabId = e), (It = i));
    let n = t.tabs.find((r) => r.id === e);
    n &&
      (t.view.setState(n.state),
      t.view.dispatch({
        effects: [
          hc.reconfigure(Oc()),
          uc.reconfigure(dc()),
          fc.reconfigure(Ac()),
          Tn.reconfigure(mi[n.lang].load()),
        ],
      }),
      Bi(),
      pi(),
      Fc(),
      pc(),
      t.view.focus());
  }
  async function wn(i, e) {
    let t = Hs(i);
    if (!t) return;
    let x = t.tabs.find((r) => r.id === e);
    if (
      !x ||
      (x.dirty &&
        !confirm(
          `\u300C${x.name}\u300D\u306F\u672A\u4FDD\u5B58\u3067\u3059\u3002\u9589\u3058\u307E\u3059\u304B\uFF1F`,
        ))
    )
      return;
    let n = t.tabs.indexOf(x);
    if ((t.tabs.splice(n, 1), t.tabs.length === 0)) {
      if (K.length === 1) {
        lx({}, t.id);
        return;
      }
      i6(t);
      return;
    }
    t.activeTabId === e ? Vt(t.id, t.tabs[Math.max(0, n - 1)].id) : gi(t);
  }
  async function FF(i, e) {
    let t = i.tabs.filter((x) => x.id !== e.id);
    for (let x of t) await wn(i.id, x.id);
  }
  function i6(i) {
    var t;
    let e = K.indexOf(i);
    if (
      e !== -1 &&
      (K.splice(e, 1),
      i.view.destroy(),
      Gs.delete(i.view),
      t6(),
      mc(),
      It === i.id)
    ) {
      let x = K[Math.max(0, e - 1)] || K[0];
      x &&
        Vt(x.id, (t = x.activeTabId) != null ? t : x.tabs[0] && x.tabs[0].id);
    }
  }
  function kn(i, e, t) {
    let x = Ex(i.id);
    if (!x || !e) return;
    if (x === e && x.tabs.length === 1) {
      ee(
        "\u3053\u308C\u4EE5\u4E0A\u5206\u5272\u3067\u304D\u307E\u305B\u3093(\u3053\u306E\u30DA\u30A4\u30F3\u306B\u306F\u30BF\u30D6\u304C1\u3064\u3057\u304B\u3042\u308A\u307E\u305B\u3093)",
      );
      return;
    }
    if (K.length >= Ud) {
      ee(
        `\u5206\u5272\u306F\u6700\u5927${Ud}\u30DA\u30A4\u30F3\u307E\u3067\u3067\u3059`,
      );
      return;
    }
    Bc(x, i);
    let n = x.tabs.indexOf(i);
    if (n === -1) return;
    let r = x.activeTabId === i.id;
    x.tabs.splice(n, 1);
    let s = e6(),
      o = K.indexOf(e);
    (K.splice(t === "right" ? o + 1 : o, 0, s),
      s.tabs.push(i),
      x.tabs.length === 0
        ? (K.splice(K.indexOf(x), 1), x.view.destroy(), Gs.delete(x.view))
        : r
          ? Vt(x.id, x.tabs[Math.max(0, n - 1)].id)
          : gi(x),
      t6(),
      mc(),
      Vt(s.id, i.id));
  }
  function Pn(i, e, t, x = t.tabs.length) {
    if (!e || !t) return;
    Bc(e, i);
    let n = e.tabs.indexOf(i);
    if (n === -1) return;
    if (e === t) {
      e.tabs.splice(n, 1);
      let o = x > n ? x - 1 : x;
      (e.tabs.splice(o, 0, i), gi(e));
      return;
    }
    let r = e.activeTabId === i.id,
      s = e.tabs.length === 1;
    (e.tabs.splice(n, 1),
      t.tabs.splice(x, 0, i),
      s && K.length > 1
        ? i6(e)
        : r
          ? Vt(e.id, e.tabs[Math.max(0, n - 1)].id)
          : gi(e),
      Vt(t.id, i.id));
  }
  function DF(i) {
    let e = Gs.get(i.view);
    if (!e) return;
    let t = e.tabs.find((x) => x.id === e.activeTabId);
    (i.docChanged && t && !t.dirty && ((t.dirty = !0), gi(e)),
      (i.selectionSet || i.docChanged) && e.id === It && pi());
  }
  var gc = typeof window.showOpenFilePicker == "function";
  function x6(i) {
    let e = new Uint8Array(i),
      t = !1,
      x = "UTF8",
      n = 0;
    e.length >= 3 &&
      e[0] === 239 &&
      e[1] === 187 &&
      e[2] === 191 &&
      ((t = !0), (n = 3));
    let r = n ? e.subarray(n) : e,
      s;
    try {
      s = new TextDecoder("utf-8", { fatal: !0 }).decode(r);
    } catch {
      let l = ox.default.detect(r);
      ((x = l === "SJIS" ? "SJIS" : l || "SJIS"),
        x !== "UTF8"
          ? (s = ox.default.codeToString(
              ox.default.convert(r, { to: "UNICODE", from: x }),
            ))
          : (s = new TextDecoder("utf-8").decode(r)));
    }
    let o = s.includes(`\r
`)
      ? "CRLF"
      : "LF";
    return {
      text: s.replace(
        /\r\n/g,
        `
`,
      ),
      encoding: x === "SJIS" ? "SJIS" : "UTF8",
      eol: o,
      bom: t,
    };
  }
  function SF(i, e) {
    let t =
      i.eol === "CRLF"
        ? e.replace(
            /\n/g,
            `\r
`,
          )
        : e;
    if (i.encoding === "SJIS")
      return new Uint8Array(
        ox.default.convert(ox.default.stringToCode(t), {
          to: "SJIS",
          from: "UNICODE",
        }),
      );
    let x = new TextEncoder().encode(t);
    if (!i.bom) return x;
    let n = new Uint8Array(x.length + 3);
    return (n.set([239, 187, 191]), n.set(x, 3), n);
  }
  async function Yd() {
    if (gc) {
      let i;
      try {
        i = await showOpenFilePicker({ multiple: !0 });
      } catch {
        return;
      }
      for (let e of i) await n6(e);
    } else W("#file-input").click();
  }
  async function n6(i) {
    let e = await i.getFile();
    await Us(e, i);
  }
  async function r6(i) {
    if (!i) return null;
    for (let e of Js())
      if (e.handle)
        try {
          if (await e.handle.isSameEntry(i)) return e;
        } catch {}
    return null;
  }
  async function Us(i, e = null) {
    let t = await r6(e);
    if (t) {
      let o = Ex(t.id);
      o && Vt(o.id, t.id);
      return;
    }
    let { text: x, encoding: n, eol: r, bom: s } = x6(await i.arrayBuffer());
    lx({ name: i.name, content: x, handle: e, encoding: n, eol: r, bom: s });
  }
  async function ac(i, e = !1) {
    let t = Ex(i.id);
    Bc(t, i);
    let x = i.state.doc.toString(),
      n = SF(i, x);
    if (gc)
      try {
        (e || !i.handle) &&
          ((i.handle = await showSaveFilePicker({ suggestedName: i.name })),
          (i.name = i.handle.name),
          (i.lang = cc(i.name)),
          t &&
            t.activeTabId === i.id &&
            t.view.dispatch({ effects: Tn.reconfigure(mi[i.lang].load()) }));
        let s = await i.handle.createWritable();
        (await s.write(n),
          await s.close(),
          (i.dirty = !1),
          (i.orphaned = !1),
          Bi(),
          pi(),
          ee(`\u4FDD\u5B58\u3057\u307E\u3057\u305F: ${i.name}`));
        return;
      } catch (s) {
        if (s && s.name === "AbortError") return;
        ee(
          "\u4FDD\u5B58\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u4FDD\u5B58\u306B\u5207\u308A\u66FF\u3048\u307E\u3059",
        );
      }
    let r = document.createElement("a");
    ((r.href = URL.createObjectURL(new Blob([n]))),
      (r.download = i.name),
      r.click(),
      setTimeout(() => URL.revokeObjectURL(r.href), 5e3),
      (i.dirty = !1),
      Bi(),
      ee(
        `\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3068\u3057\u3066\u4FDD\u5B58: ${i.name}`,
      ));
  }
  var bF = typeof window.showDirectoryPicker == "function",
    Te = null,
    Ie = null,
    pt = null,
    jt = null,
    ax = new Map(),
    s6 = /^(thumbs\.db|desktop\.ini)$/i,
    yF = /[<>:"/\\|?*\x00-\x1f]/,
    QF = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\.|$)/i,
    kF = (i, e) =>
      i.localeCompare(e, "ja", { numeric: !0, sensitivity: "base" });
  function vn(i, e, t, x) {
    return {
      name: i,
      kind: e,
      handle: t,
      parent: x,
      children: e === "directory" ? null : void 0,
      expanded: !1,
      file: null,
    };
  }
  function o6(i) {
    i.sort((e, t) =>
      e.kind !== t.kind
        ? e.kind === "directory"
          ? -1
          : 1
        : kF(e.name, t.name),
    );
  }
  function l6(i) {
    return !i || !i.trim()
      ? "\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
      : yF.test(i)
        ? '\u4F7F\u7528\u3067\u304D\u306A\u3044\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059: < > : " / \\ | ? *'
        : /[. ]$/.test(i)
          ? "\u540D\u524D\u306E\u672B\u5C3E\u306B\u30D4\u30EA\u30AA\u30C9\u3084\u7A7A\u767D\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093"
          : QF.test(i)
            ? "Windows\u306E\u4E88\u7D04\u540D\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093"
            : null;
  }
  async function a6(i, e) {
    try {
      return (await i.getFileHandle(e), !0);
    } catch {}
    try {
      return (await i.getDirectoryHandle(e), !0);
    } catch {}
    return !1;
  }
  async function z0(i) {
    if (i.children) return i.children;
    let e = [];
    try {
      for await (let [t, x] of i.handle.entries())
        s6.test(t) || e.push(vn(t, x.kind, x, i));
    } catch {
      ee(
        `\u30D5\u30A9\u30EB\u30C0\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F: ${i.name}`,
      );
    }
    return (o6(e), (i.children = e), e);
  }
  function vF(i) {
    let e = [...i].filter((n) => !s6.test(n.name));
    if (e.length === 0) return null;
    let t = e[0].webkitRelativePath.split("/")[0],
      x = vn(t, "directory", null, null);
    ((x.children = []), (x.expanded = !0));
    for (let n of e) {
      let r = n.webkitRelativePath.split("/").slice(1),
        s = x;
      r.forEach((o, l) => {
        if (l === r.length - 1) {
          let a = vn(o, "file", null, s);
          ((a.file = n), s.children.push(a));
        } else {
          let a = s.children.find(
            (E) => E.kind === "directory" && E.name === o,
          );
          (a ||
            ((a = vn(o, "directory", null, s)),
            (a.children = []),
            s.children.push(a)),
            (s = a));
        }
      });
    }
    return (
      (function n(r) {
        r.children && (o6(r.children), r.children.forEach(n));
      })(x),
      x
    );
  }
  async function Nd() {
    if (bF) {
      let i,
        e = !1;
      try {
        i = await showDirectoryPicker({ mode: "readwrite" });
      } catch (t) {
        if (t && t.name === "AbortError") return;
        try {
          ((i = await showDirectoryPicker({ mode: "read" })), (e = !0));
        } catch (x) {
          if (x && x.name === "AbortError") return;
          ee(
            `\u30D5\u30A9\u30EB\u30C0\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F(${x && x.name ? x.name : "\u30A8\u30E9\u30FC"}): ${x && x.message ? x.message : "\u8A73\u7D30\u4E0D\u660E"}`,
          );
          return;
        }
      }
      try {
        ((Te = vn(i.name, "directory", i, null)),
          (Te.expanded = !0),
          (Te.readOnly = e),
          (Ie = null),
          (pt = null),
          await z0(Te),
          f0(),
          Qn(!0),
          e &&
            ee(
              "\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u3092\u53D6\u5F97\u3067\u304D\u306A\u304B\u3063\u305F\u305F\u3081\u3001\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u958B\u304D\u307E\u3057\u305F(\u4F5C\u6210\u30FB\u524A\u9664\u30FB\u540D\u524D\u5909\u66F4\u306F\u4E0D\u53EF)",
            ));
      } catch (t) {
        ee(
          `\u30D5\u30A9\u30EB\u30C0\u306E\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${t && t.message ? t.message : t}`,
        );
      }
    } else W("#folder-input").click();
  }
  async function Gd(i) {
    ((Ie = i),
      i.kind === "directory"
        ? (i.expanded
            ? (i.expanded = !1)
            : (!i.children && i.handle && (await z0(i)), (i.expanded = !0)),
          f0())
        : await wF(i));
  }
  async function wF(i) {
    if (i.handle) {
      let e = await r6(i.handle);
      if (e) {
        let o = Ex(e.id);
        o && Vt(o.id, e.id);
        return;
      }
      let t;
      try {
        t = await i.handle.getFile();
      } catch {
        ee(
          `\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F: ${i.name}`,
        );
        return;
      }
      let { text: x, encoding: n, eol: r, bom: s } = x6(await t.arrayBuffer());
      lx({
        name: i.name,
        content: x,
        handle: i.handle,
        encoding: n,
        eol: r,
        bom: s,
      });
    } else i.file && (await Us(i.file));
    Fc();
  }
  function Cc(i) {
    let e = i;
    for (; e.parent;) e = e.parent;
    return !!e.readOnly;
  }
  function wt() {
    ((pt = null), f0());
  }
  async function Ys(i, e) {
    if (!i) {
      ee(
        "\u5148\u306B\u30D5\u30A9\u30EB\u30C0\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044",
      );
      return;
    }
    if (i.kind !== "directory" || !i.handle) {
      ee(
        "\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u3067\u306F\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093(\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u30E2\u30FC\u30C9)",
      );
      return;
    }
    if (Cc(i)) {
      ee(
        "\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u958B\u304B\u308C\u3066\u3044\u307E\u3059(\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093)",
      );
      return;
    }
    (i.children || (await z0(i)),
      (i.expanded = !0),
      (pt = { type: e === "file" ? "new-file" : "new-folder", parent: i }),
      f0());
  }
  async function PF(i, e, t) {
    let x = l6(e);
    if (x) {
      (ee(x), wt());
      return;
    }
    if (await a6(i.handle, e)) {
      (ee(`\u300C${e}\u300D\u306F\u65E2\u306B\u5B58\u5728\u3057\u307E\u3059`),
        wt());
      return;
    }
    try {
      t === "file"
        ? await i.handle.getFileHandle(e, { create: !0 })
        : await i.handle.getDirectoryHandle(e, { create: !0 });
    } catch {
      (ee(`\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${e}`),
        wt());
      return;
    }
    ((i.children = null),
      await z0(i),
      wt(),
      ee(`\u4F5C\u6210\u3057\u307E\u3057\u305F: ${e}`));
  }
  function E6(i) {
    if (!(!i || !i.parent)) {
      if (!i.handle) {
        ee(
          "\u3053\u306E\u9805\u76EE\u306F\u540D\u524D\u3092\u5909\u66F4\u3067\u304D\u307E\u305B\u3093",
        );
        return;
      }
      if (Cc(i)) {
        ee(
          "\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u958B\u304B\u308C\u3066\u3044\u307E\u3059(\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093)",
        );
        return;
      }
      if (i.kind === "directory") {
        ee(
          "\u30D5\u30A9\u30EB\u30C0\u306E\u540D\u524D\u5909\u66F4\u306F\u73FE\u5728\u672A\u5BFE\u5FDC\u3067\u3059",
        );
        return;
      }
      ((pt = { type: "rename", node: i }), f0());
    }
  }
  async function TF(i, e) {
    let t = l6(e);
    if (t) {
      (ee(t), wt());
      return;
    }
    if (e === i.name) {
      wt();
      return;
    }
    let x = i.parent.handle;
    if (await a6(x, e)) {
      (ee(`\u300C${e}\u300D\u306F\u65E2\u306B\u5B58\u5728\u3057\u307E\u3059`),
        wt());
      return;
    }
    let n = i.handle;
    try {
      if (typeof i.handle.move == "function") await i.handle.move(e);
      else {
        let o = await (await i.handle.getFile()).arrayBuffer(),
          l = await x.getFileHandle(e, { create: !0 }),
          a = await l.createWritable();
        (await a.write(o),
          await a.close(),
          await x.removeEntry(i.name),
          (i.handle = l));
      }
    } catch {
      (ee(
        `\u540D\u524D\u306E\u5909\u66F4\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${i.name}`,
      ),
        wt());
      return;
    }
    let r = i.name;
    i.name = e;
    for (let s of Js())
      if (s.handle)
        try {
          if (await s.handle.isSameEntry(n)) {
            ((s.handle = i.handle), (s.name = e));
            let o = cc(e);
            if (o !== s.lang) {
              s.lang = o;
              let l = Ex(s.id);
              l &&
                l.activeTabId === s.id &&
                l.view.dispatch({ effects: Tn.reconfigure(mi[s.lang].load()) });
            }
          }
        } catch {}
    (Bi(),
      (i.parent.children = null),
      await z0(i.parent),
      wt(),
      ee(
        `\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3057\u305F: ${r} \u2192 ${e}`,
      ));
  }
  async function c6(i, e = []) {
    if (i.kind === "file") return (i.handle && e.push(i.handle), e);
    let t = i.children || (i.handle ? await z0(i) : []);
    for (let x of t) await c6(x, e);
    return e;
  }
  async function $F(i) {
    let e = i.kind === "file" ? (i.handle ? [i.handle] : []) : await c6(i);
    for (let t of e)
      for (let x of Js())
        if (x.handle)
          try {
            (await x.handle.isSameEntry(t)) && _F(x);
          } catch {}
  }
  function _F(i) {
    if (!i.handle) return;
    ((i.handle = null), (i.orphaned = !0));
    let e = Ex(i.id);
    e && (gi(e), e.id === It && e.activeTabId === i.id && pi());
  }
  async function h6(i) {
    if (!i || !i.parent || !i.parent.handle) return;
    if (Cc(i)) {
      ee(
        "\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u958B\u304B\u308C\u3066\u3044\u307E\u3059(\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093)",
      );
      return;
    }
    let e = i.kind === "directory",
      t = `\u300C${i.name}\u300D${e ? "\u3068\u305D\u306E\u4E2D\u8EAB\u3092\u3059\u3079\u3066" : ""}\u524A\u9664\u3057\u307E\u3059\u3002\u3053\u306E\u64CD\u4F5C\u306F\u53D6\u308A\u6D88\u305B\u307E\u305B\u3093(\u30B4\u30DF\u7BB1\u306B\u306F\u5165\u308A\u307E\u305B\u3093)\u3002\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F`;
    if (confirm(t)) {
      try {
        await i.parent.handle.removeEntry(i.name, { recursive: !0 });
      } catch {
        ee(`\u524A\u9664\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${i.name}`);
        return;
      }
      (await $F(i),
        Ie === i && (Ie = null),
        (i.parent.children = null),
        await z0(i.parent),
        f0(),
        ee(`\u524A\u9664\u3057\u307E\u3057\u305F: ${i.name}`));
    }
  }
  function Ns() {
    jt && (jt.remove(), (jt = null));
  }
  function f6(i, e, t) {
    if ((Ns(), i.length === 0)) return;
    ((jt = document.createElement("div")), (jt.id = "context-menu"));
    for (let [n, r] of i) {
      let s = document.createElement("div");
      ((s.className = "menu-item"),
        (s.textContent = n),
        s.addEventListener("click", () => {
          (Ns(), r());
        }),
        jt.appendChild(s));
    }
    document.body.appendChild(jt);
    let x = jt.getBoundingClientRect();
    ((jt.style.left = Math.min(e, window.innerWidth - x.width - 4) + "px"),
      (jt.style.top = Math.min(t, window.innerHeight - x.height - 4) + "px"));
  }
  function XF(i, e, t) {
    let x = [];
    (i.kind === "directory" &&
      i.handle &&
      (x.push([
        "\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB",
        () => Ys(i, "file"),
      ]),
      x.push([
        "\u65B0\u3057\u3044\u30D5\u30A9\u30EB\u30C0",
        () => Ys(i, "folder"),
      ])),
      i.parent &&
        i.handle &&
        (x.push(["\u540D\u524D\u306E\u5909\u66F4 (F2)", () => E6(i)]),
        x.push(["\u524A\u9664 (Delete)", () => h6(i)])),
      f6(x, e, t));
  }
  function f0() {
    let i = W("#tree"),
      e = W("#sidebar-empty");
    if (
      (ax.clear(),
      (i.innerHTML = ""),
      (W("#readonly-badge").hidden = !(Te && Te.readOnly)),
      !Te)
    ) {
      ((i.hidden = !0), (e.hidden = !1));
      return;
    }
    ((e.hidden = !0),
      (i.hidden = !1),
      u6(Te, 0, i),
      Fc(),
      RF(),
      Ie && ax.has(Ie) && ax.get(Ie).focus({ preventScroll: !0 }));
  }
  function Hd(i, e, t, x, n, r) {
    let s = document.createElement("div");
    ((s.className = "tree-row editing"),
      (s.style.paddingLeft = 8 + e * 16 + "px"));
    let o = t === "directory" ? "\u{1F4C1}" : "\u{1F4C4}";
    s.innerHTML = `<span class="arrow"></span><span class="icon">${o}</span>`;
    let l = document.createElement("input");
    ((l.className = "tree-edit-input"),
      (l.value = x),
      (l.spellcheck = !1),
      s.appendChild(l),
      i.appendChild(s),
      requestAnimationFrame(() => {
        (l.focus(), l.select());
      }));
    let a = !1,
      E = async (c) => {
        if (!a)
          if (((a = !0), c)) {
            let h = l.value.trim();
            if (h === "" || h === x) {
              r();
              return;
            }
            await n(h);
          } else r();
      };
    (l.addEventListener("keydown", (c) => {
      (c.stopPropagation(),
        c.key === "Enter"
          ? (c.preventDefault(), E(!0))
          : c.key === "Escape" && (c.preventDefault(), E(!1)));
    }),
      l.addEventListener("blur", () => E(!1)));
  }
  function u6(i, e, t) {
    if (pt && pt.type === "rename" && pt.node === i) {
      Hd(
        t,
        e,
        i.kind,
        i.name,
        (s) => TF(i, s),
        () => wt(),
      );
      return;
    }
    let x = document.createElement("div");
    ((x.className = "tree-row " + i.kind),
      (x.style.paddingLeft = 8 + e * 16 + "px"),
      (x.tabIndex = 0),
      (x.title = i.name));
    let n = i.kind === "directory" ? (i.expanded ? "\u25BE" : "\u25B8") : "",
      r =
        i.kind === "directory"
          ? i.expanded
            ? "\u{1F4C2}"
            : "\u{1F4C1}"
          : "\u{1F4C4}";
    if (
      ((x.innerHTML = `<span class="arrow">${n}</span><span class="icon">${r}</span><span class="nlabel"></span>`),
      (x.querySelector(".nlabel").textContent = i.name),
      x.addEventListener("click", () => {
        ((Ie = i), Gd(i));
      }),
      x.addEventListener("contextmenu", (s) => {
        (s.preventDefault(), (Ie = i), XF(i, s.clientX, s.clientY));
      }),
      x.addEventListener("focus", () => {
        Ie = i;
      }),
      x.addEventListener("keydown", (s) => {
        (s.key === "Enter" || s.key === " ") && (s.preventDefault(), Gd(i));
      }),
      ax.set(i, x),
      t.appendChild(x),
      i.kind === "directory" && i.expanded && i.children)
    ) {
      for (let s of i.children) u6(s, e + 1, t);
      if (
        pt &&
        pt.parent === i &&
        (pt.type === "new-file" || pt.type === "new-folder")
      ) {
        let s = pt.type === "new-file" ? "file" : "folder";
        Hd(
          t,
          e + 1,
          s === "file" ? "file" : "directory",
          "",
          (o) => PF(i, o, s),
          () => wt(),
        );
      }
    }
  }
  function Fc() {
    let i = Bt();
    for (let [e, t] of ax) {
      let x =
        !!i &&
        e.kind === "file" &&
        ((e.handle && i.handle === e.handle) ||
          (e.file && !i.handle && i.name === e.name));
      t.classList.toggle("active", x);
    }
  }
  function RF() {
    for (let [i, e] of ax) e.classList.toggle("selected", i === Ie);
  }
  function Qn(i) {
    ((se.sidebarVisible = i),
      Wt.set("sidebarVisible", i),
      (W("#sidebar").style.display = i ? "" : "none"),
      (W("#resizer").style.display = i ? "" : "none"),
      W("#btn-toggle-sidebar").classList.toggle("on", i));
  }
  var Ec = !1;
  function gi(i) {
    let e = i.tabbarEl;
    e.innerHTML = "";
    for (let t of i.tabs) {
      let x = document.createElement("div");
      ((x.className =
        "tab" +
        (i.id === It && t.id === i.activeTabId ? " active" : "") +
        (t.orphaned ? " orphaned" : "")),
        (x.title = t.orphaned
          ? `${t.name}\uFF08\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002\u4FDD\u5B58\u3059\u308B\u3068\u65B0\u3057\u3044\u5834\u6240\u3092\u9078\u3079\u307E\u3059\uFF09`
          : t.name));
      let n = t.dirty ? '<span class="dot">\u25CF</span>' : "";
      ((x.innerHTML = `${n}<span class="tname"></span><button class="tclose" title="\u9589\u3058\u308B">\xD7</button>`),
        (x.querySelector(".tname").textContent = t.name),
        x.addEventListener("mousedown", (r) => {
          r.button === 1 && (r.preventDefault(), wn(i.id, t.id));
        }),
        x.addEventListener("click", (r) => {
          Ec || r.target.classList.contains("tclose") || Vt(i.id, t.id);
        }),
        x
          .querySelector(".tclose")
          .addEventListener("click", () => wn(i.id, t.id)),
        x.addEventListener("contextmenu", (r) => {
          (r.preventDefault(), ZF(i, t, r.clientX, r.clientY));
        }),
        x.addEventListener("pointerdown", (r) => zF(r, i, t)),
        e.appendChild(x));
    }
  }
  function Bi() {
    for (let i of K) gi(i);
  }
  function ZF(i, e, t, x) {
    let n = K.indexOf(i),
      r = n > 0,
      s = n < K.length - 1,
      o = [];
    (o.push([
      "\u53F3\u306B\u5206\u5272\u3057\u3066\u958B\u304F",
      () => kn(e, i, "right"),
    ]),
      r &&
        o.push([
          "\u5DE6\u306E\u30DA\u30A4\u30F3\u3078\u79FB\u52D5",
          () => Pn(e, i, K[n - 1]),
        ]),
      s &&
        o.push([
          "\u53F3\u306E\u30DA\u30A4\u30F3\u3078\u79FB\u52D5",
          () => Pn(e, i, K[n + 1]),
        ]),
      i.tabs.length > 1 &&
        o.push([
          "\u4ED6\u306E\u30BF\u30D6\u3092\u3059\u3079\u3066\u9589\u3058\u308B",
          () => FF(i, e),
        ]),
      o.push(["\u9589\u3058\u308B", () => wn(i.id, e.id)]),
      f6(o, t, x));
  }
  var L0 = null;
  function Jd(i) {
    (L0 ||
      ((L0 = document.createElement("div")),
      (L0.id = "drop-indicator"),
      document.body.appendChild(L0)),
      Object.assign(L0.style, { left: "", top: "", width: "", height: "" }, i),
      (L0.hidden = !1));
  }
  function O6() {
    L0 && (L0.hidden = !0);
  }
  function d6(i, e) {
    for (let t of K) {
      let x = t.tabbarEl.getBoundingClientRect();
      if (e >= x.top && e <= x.bottom && i >= x.left && i <= x.right) {
        let r = [...t.tabbarEl.children],
          s = r.length;
        for (let o = 0; o < r.length; o++) {
          let l = r[o].getBoundingClientRect();
          if (i < l.left + l.width / 2) {
            s = o;
            break;
          }
        }
        return { type: "tabbar", pane: t, insertIndex: s };
      }
      let n = t.editorEl.getBoundingClientRect();
      if (e >= n.top && e <= n.bottom && i >= n.left && i <= n.right) {
        let r = (i - n.left) / n.width;
        return r < 0.25
          ? { type: "split", pane: t, side: "left" }
          : r > 0.75
            ? { type: "split", pane: t, side: "right" }
            : { type: "tabbar", pane: t, insertIndex: t.tabs.length };
      }
    }
    return null;
  }
  function qF(i) {
    if (!i) {
      O6();
      return;
    }
    if (i.type === "split") {
      let e = i.pane.editorEl.getBoundingClientRect(),
        t = e.width / 2,
        x = i.side === "left" ? e.left : e.left + t;
      Jd({
        left: x + "px",
        top: e.top + "px",
        width: t + "px",
        height: e.height + "px",
      });
    } else {
      let e = i.pane.tabbarEl.getBoundingClientRect(),
        t = [...i.pane.tabbarEl.children],
        x;
      (i.insertIndex >= t.length
        ? (x = t.length
            ? t[t.length - 1].getBoundingClientRect().right
            : e.left)
        : (x = t[i.insertIndex].getBoundingClientRect().left),
        Jd({
          left: x - 1 + "px",
          top: e.top + "px",
          width: "2px",
          height: e.height + "px",
        }));
    }
  }
  function LF(i, e, t, x) {
    let n = d6(i, e);
    n &&
      (n.type === "split"
        ? kn(x, n.pane, n.side)
        : Pn(x, t, n.pane, n.insertIndex));
  }
  function zF(i, e, t) {
    if (i.button !== 0) return;
    let x = i.clientX,
      n = i.clientY,
      r = !1,
      s = !1,
      o = null,
      l = (c) => {
        let h = c.clientX - x,
          f = c.clientY - n;
        (!r &&
          Math.hypot(h, f) > 5 &&
          ((r = !0),
          (o = document.createElement("div")),
          (o.className = "tab-drag-ghost"),
          (o.textContent = t.name),
          document.body.appendChild(o),
          document.body.classList.add("dragging-tab")),
          r &&
            ((o.style.left = c.clientX + 12 + "px"),
            (o.style.top = c.clientY + 12 + "px"),
            qF(d6(c.clientX, c.clientY))));
      },
      a = (c) => {
        c.key === "Escape" && ((s = !0), E(c));
      },
      E = (c) => {
        (window.removeEventListener("pointermove", l),
          window.removeEventListener("pointerup", E),
          window.removeEventListener("keydown", a),
          document.body.classList.remove("dragging-tab"),
          o && o.remove(),
          O6(),
          r &&
            !s &&
            ((Ec = !0),
            LF(c.clientX, c.clientY, e, t),
            setTimeout(() => {
              Ec = !1;
            }, 0)));
      };
    (window.addEventListener("pointermove", l),
      window.addEventListener("pointerup", E),
      window.addEventListener("keydown", a));
  }
  function pi() {
    let i = Mt();
    if (!i) return;
    let e = Bt();
    if (!e) return;
    let t = i.view.state,
      x = t.selection.main.head,
      n = t.doc.lineAt(x);
    ((W("#st-pos").textContent =
      `\u884C ${n.number}, \u5217 ${x - n.from + 1}`),
      (W("#st-doc").textContent =
        `${t.doc.lines}\u884C / ${t.doc.length}\u6587\u5B57`),
      (W("#st-enc").textContent =
        e.encoding === "SJIS" ? "Shift_JIS" : e.bom ? "UTF-8 BOM" : "UTF-8"),
      (W("#st-eol").textContent = e.eol),
      (W("#lang-select").value = e.lang));
  }
  var Kd = null;
  function ee(i) {
    let e = W("#flash");
    ((e.textContent = i),
      e.classList.add("show"),
      clearTimeout(Kd),
      (Kd = setTimeout(() => e.classList.remove("show"), 2500)));
  }
  function MF() {
    let i = e6();
    (K.push(i), (It = i.id), mc(), (document.body.dataset.theme = se.theme));
    let e = W("#lang-select");
    for (let [n, r] of Object.entries(mi)) {
      let s = document.createElement("option");
      ((s.value = n), (s.textContent = r.label), e.appendChild(s));
    }
    (e.addEventListener("change", () => {
      let n = Bt(),
        r = Mt();
      !n ||
        !r ||
        ((n.lang = e.value),
        r.view.dispatch({ effects: Tn.reconfigure(mi[n.lang].load()) }),
        r.view.focus());
    }),
      W("#btn-new").addEventListener("click", () => lx({})),
      W("#btn-open").addEventListener("click", Yd),
      W("#btn-open-folder").addEventListener("click", Nd),
      W("#btn-open-folder-empty").addEventListener("click", Nd),
      W("#btn-new-file-root").addEventListener("click", () => Ys(Te, "file")),
      W("#btn-new-folder-root").addEventListener("click", () =>
        Ys(Te, "folder"),
      ),
      W("#btn-refresh-folder").addEventListener("click", async () => {
        if (Te) {
          if (!Te.handle) {
            ee(
              "\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306F\u518D\u8AAD\u307F\u8FBC\u307F\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093",
            );
            return;
          }
          ((Te.children = null),
            (Te.expanded = !0),
            await z0(Te),
            f0(),
            ee(
              "\u30D5\u30A9\u30EB\u30C0\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u307E\u3057\u305F(\u5C55\u958B\u72B6\u614B\u306F\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3057\u305F)",
            ));
        }
      }),
      W("#btn-toggle-sidebar").addEventListener("click", () =>
        Qn(!se.sidebarVisible),
      ),
      W("#btn-split").addEventListener("click", () => {
        let n = Mt(),
          r = Bt();
        n && r && kn(r, n, "right");
      }),
      W("#folder-input").addEventListener("change", (n) => {
        let r = vF(n.target.files);
        (r && ((Te = r), f0(), Qn(!0)), (n.target.value = ""));
      }),
      W("#btn-save").addEventListener("click", () => {
        let n = Bt();
        n && ac(n);
      }),
      W("#btn-saveas").addEventListener("click", () => {
        let n = Bt();
        n && ac(n, !0);
      }),
      W("#btn-find").addEventListener("click", () => {
        let n = Mt();
        n && ls(n.view);
      }),
      W("#btn-undo").addEventListener("click", () => {
        let n = Mt();
        n && (Wr(n.view), n.view.focus());
      }),
      W("#btn-redo").addEventListener("click", () => {
        let n = Mt();
        n && (jx(n.view), n.view.focus());
      }),
      W("#btn-wrap").addEventListener("click", () => {
        ((se.wrap = !se.wrap),
          Wt.set("wrap", se.wrap),
          W("#btn-wrap").classList.toggle("on", se.wrap));
        for (let n of K) n.view.dispatch({ effects: fc.reconfigure(Ac()) });
      }),
      W("#btn-wrap").classList.toggle("on", se.wrap),
      W("#btn-theme").addEventListener("click", () => {
        ((se.theme = se.theme === "dark" ? "light" : "dark"),
          Wt.set("theme", se.theme),
          (document.body.dataset.theme = se.theme));
        for (let n of K) n.view.dispatch({ effects: hc.reconfigure(Oc()) });
      }),
      W("#btn-minus").addEventListener("click", () => t(se.fontSize - 1)),
      W("#btn-plus").addEventListener("click", () => t(se.fontSize + 1)));
    function t(n) {
      ((se.fontSize = Math.min(28, Math.max(9, n))),
        Wt.set("fontSize", se.fontSize),
        (W("#st-font").textContent = se.fontSize + "px"));
      for (let r of K) r.view.dispatch({ effects: uc.reconfigure(dc()) });
    }
    ((W("#st-font").textContent = se.fontSize + "px"),
      W("#st-enc").addEventListener("click", () => {
        let n = Bt();
        n &&
          ((n.encoding = n.encoding === "SJIS" ? "UTF8" : "SJIS"),
          n.encoding === "SJIS" && (n.bom = !1),
          (n.dirty = !0),
          Bi(),
          pi(),
          ee(
            `\u4FDD\u5B58\u6642\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0: ${n.encoding === "SJIS" ? "Shift_JIS" : "UTF-8"}`,
          ));
      }),
      W("#st-eol").addEventListener("click", () => {
        let n = Bt();
        n &&
          ((n.eol = n.eol === "CRLF" ? "LF" : "CRLF"),
          (n.dirty = !0),
          Bi(),
          pi(),
          ee(
            `\u4FDD\u5B58\u6642\u306E\u6539\u884C\u30B3\u30FC\u30C9: ${n.eol}`,
          ));
      }),
      W("#file-input").addEventListener("change", async (n) => {
        for (let r of n.target.files) await Us(r);
        n.target.value = "";
      }),
      window.addEventListener("dragover", (n) => n.preventDefault()),
      window.addEventListener("drop", async (n) => {
        n.preventDefault();
        for (let r of n.dataTransfer.items) {
          if (r.kind !== "file") continue;
          if (r.getAsFileSystemHandle) {
            let o = await r.getAsFileSystemHandle();
            if (o && o.kind === "file") {
              await n6(o);
              continue;
            }
          }
          let s = r.getAsFile();
          s && (await Us(s));
        }
      }),
      window.addEventListener("keydown", (n) => {
        if (!(n.ctrlKey || n.metaKey)) return;
        let s = n.key.toLowerCase();
        if (s === "s") {
          n.preventDefault();
          let o = Bt();
          o && ac(o, n.shiftKey);
        } else if (s === "o") (n.preventDefault(), Yd());
        else if (s === "n" && n.altKey) (n.preventDefault(), lx({}));
        else if (s === "w" && n.altKey) {
          n.preventDefault();
          let o = Mt();
          o && Bt() && wn(o.id, o.activeTabId);
        } else if (s === "b") (n.preventDefault(), Qn(!se.sidebarVisible));
        else if (n.altKey && (s === "arrowright" || s === "arrowleft")) {
          n.preventDefault();
          let o = Mt(),
            l = Bt();
          if (!o || !l) return;
          let a = K.indexOf(o);
          s === "arrowright"
            ? a === K.length - 1
              ? kn(l, o, "right")
              : Pn(l, o, K[a + 1])
            : a === 0
              ? kn(l, o, "left")
              : Pn(l, o, K[a - 1]);
        }
      }),
      window.addEventListener("beforeunload", (n) => {
        Js().some((r) => r.dirty) && (n.preventDefault(), (n.returnValue = ""));
      }),
      window.addEventListener("keydown", (n) => {
        if (n.key !== "F2" && n.key !== "Delete") return;
        let r = document.activeElement,
          s = r && r.closest && r.closest(".cm-editor"),
          o = r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA");
        s ||
          o ||
          !Ie ||
          (n.key === "F2"
            ? (n.preventDefault(), E6(Ie))
            : (n.preventDefault(), h6(Ie)));
      }),
      window.addEventListener("click", Ns),
      window.addEventListener("scroll", Ns, !0),
      W("#pane-container").addEventListener("mousedown", (n) => {
        let r = n.target.closest(".pane");
        if (!r) return;
        let s = K.find((o) => o.el === r);
        s && s.id !== It && ((It = s.id), pc(), pi());
      }),
      (W("#sidebar").style.width = se.sidebarWidth + "px"),
      Qn(se.sidebarVisible),
      f0(),
      (function () {
        let r = W("#resizer"),
          s = W("#sidebar"),
          o = !1;
        (r.addEventListener("mousedown", (l) => {
          ((o = !0), r.classList.add("dragging"), l.preventDefault());
        }),
          window.addEventListener("mousemove", (l) => {
            o &&
              (s.style.width = Math.min(480, Math.max(160, l.clientX)) + "px");
          }),
          window.addEventListener("mouseup", () => {
            o &&
              ((o = !1),
              r.classList.remove("dragging"),
              (se.sidebarWidth = parseInt(s.style.width, 10)),
              Wt.set("sidebarWidth", se.sidebarWidth));
          }));
      })(),
      gc ||
        ee(
          "\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u76F4\u63A5\u4FDD\u5B58\u306B\u975E\u5BFE\u5FDC\u306E\u305F\u3081\u3001\u4FDD\u5B58\u306F\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5F62\u5F0F\u306B\u306A\u308A\u307E\u3059",
        ),
      lx({ name: "welcome.md", lang: "markdown", content: jF }));
    let x = Bt();
    ((x.dirty = !1), Bi());
  }
  var jF = `# SoloCode \u3078\u3088\u3046\u3053\u305D

\u5B8C\u5168\u30AA\u30D5\u30E9\u30A4\u30F3\u3067\u52D5\u4F5C\u3059\u308B\u5358\u4E00\u30D5\u30A1\u30A4\u30EB\u306E\u30B3\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u3067\u3059\u3002\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u63A5\u7D9A\u3092\u4E00\u5207\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093\u3002

## \u4F7F\u3044\u65B9
- **\u958B\u304F**: \u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u300C\u958B\u304F\u300D\u307E\u305F\u306F\u30D5\u30A1\u30A4\u30EB\u3092\u3053\u306E\u753B\u9762\u306B\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7
- **\u4FDD\u5B58**: Ctrl+S\uFF08\u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u5143\u30D5\u30A1\u30A4\u30EB\u3078\u76F4\u63A5\u4E0A\u66F8\u304D / \u975E\u5BFE\u5FDC\u306A\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\uFF09
- **\u540D\u524D\u3092\u4ED8\u3051\u3066\u4FDD\u5B58**: Ctrl+Shift+S
- **\u691C\u7D22\u30FB\u7F6E\u63DB**: Ctrl+F / \u7F6E\u63DB\u306F\u691C\u7D22\u30D1\u30CD\u30EB\u5185\u3067\u5207\u66FF
- **\u65B0\u898F\u30BF\u30D6**: Ctrl+Alt+N \uFF0F **\u30BF\u30D6\u3092\u9589\u3058\u308B**: Ctrl+Alt+W \u307E\u305F\u306F\u4E2D\u30AF\u30EA\u30C3\u30AF
- **\u884C\u3078\u79FB\u52D5**: Alt+G

## \u30D5\u30A9\u30EB\u30C0\u3092\u958B\u304F
\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u300C\u30D5\u30A9\u30EB\u30C0\u3092\u958B\u304F\u300D\u3067\u3001VSCode\u306E\u3088\u3046\u306B\u5DE6\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u30D5\u30A9\u30EB\u30C0\u69CB\u6210\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002
\u30D5\u30A1\u30A4\u30EB\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u958B\u304D\u3001\u30D5\u30A9\u30EB\u30C0\u306F\u30AF\u30EA\u30C3\u30AF\u3067\u5C55\u958B/\u6298\u308A\u305F\u305F\u307F\u3067\u304D\u307E\u3059\uFF08Ctrl+B\u3067\u30B5\u30A4\u30C9\u30D0\u30FC\u8868\u793A\u5207\u66FF\uFF09\u3002

## \u30D5\u30A1\u30A4\u30EB/\u30D5\u30A9\u30EB\u30C0\u306E\u64CD\u4F5C
\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u9805\u76EE\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u300C\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u300D\u300C\u65B0\u3057\u3044\u30D5\u30A9\u30EB\u30C0\u300D\u300C\u540D\u524D\u306E\u5909\u66F4\u300D\u300C\u524A\u9664\u300D\u304C\u884C\u3048\u307E\u3059\u3002
\u9078\u629E\u4E2D\u306E\u9805\u76EE\u306B\u5BFE\u3057\u3066 F2\uFF08\u540D\u524D\u306E\u5909\u66F4\uFF09\uFF0F Delete\uFF08\u524A\u9664\uFF09\u30AD\u30FC\u3082\u4F7F\u3048\u307E\u3059\u3002
- \u958B\u3044\u3066\u3044\u308B\u30D5\u30A1\u30A4\u30EB\u304C\u524A\u9664\u3055\u308C\u308B\u3068\u3001\u30BF\u30D6\u306F\u9589\u3058\u305A\u306B\u300C\u5B64\u7ACB\u300D\u72B6\u614B\uFF08\u26A0\u30DE\u30FC\u30AF\uFF09\u306B\u306A\u308A\u3001\u4FDD\u5B58\u6642\u306B\u65B0\u3057\u3044\u5834\u6240\u3092\u9078\u3079\u307E\u3059
- \u30D5\u30A9\u30EB\u30C0\u306E\u540D\u524D\u5909\u66F4\u306F\u73FE\u5728\u672A\u5BFE\u5FDC\u3067\u3059

## \u5206\u5272\u30DA\u30A4\u30F3
\u30BF\u30D6\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u2192\u300C\u53F3\u306B\u5206\u5272\u3057\u3066\u958B\u304F\u300D\u3067\u753B\u9762\u3092\u5DE6\u53F3\u306B\u5206\u5272\u3067\u304D\u307E\u3059\uFF08\u6700\u59273\u30DA\u30A4\u30F3\uFF09\u3002
\u30BF\u30D6\u3092\u3064\u307E\u3093\u3067\u30A8\u30C7\u30A3\u30BF\u9818\u57DF\u306E\u7AEF\u307E\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u3082\u5206\u5272\u3055\u308C\u307E\u3059\u3002\u4E2D\u592E\u306B\u30C9\u30ED\u30C3\u30D7\u3059\u308C\u3070\u305D\u306E\u30DA\u30A4\u30F3\u3078\u79FB\u52D5\u3001\u30BF\u30D6\u30D0\u30FC\u4E0A\u306B\u30C9\u30ED\u30C3\u30D7\u3059\u308C\u3070\u4E26\u3079\u66FF\u3048/\u5225\u30DA\u30A4\u30F3\u3078\u306E\u79FB\u52D5\u306B\u306A\u308A\u307E\u3059\u3002
\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u300C\u2AFF \u5206\u5272\u300D\u30DC\u30BF\u30F3\u3084Ctrl+Alt+\u2192/\u2190\u3067\u3082\u5206\u5272\u30FB\u79FB\u52D5\u304C\u3067\u304D\u307E\u3059\u3002

## \u5BFE\u5FDC\u8A00\u8A9E
C# / Python / JavaScript / TypeScript / Vue / HTML / CSS / VBA\u30FBVB / Markdown / JSON / SQL / XML

## \u65E5\u672C\u8A9E\u74B0\u5883\u5411\u3051\u6A5F\u80FD
- Shift_JIS \u30D5\u30A1\u30A4\u30EB\u3092\u81EA\u52D5\u5224\u5B9A\u3057\u3066\u8AAD\u307F\u8FBC\u307F\u3001**\u5143\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u307E\u307E\u4FDD\u5B58**\u3057\u307E\u3059
- \u6539\u884C\u30B3\u30FC\u30C9\uFF08CRLF / LF\uFF09\u3082\u4FDD\u6301\u3057\u307E\u3059\u3002\u30B9\u30C6\u30FC\u30BF\u30B9\u30D0\u30FC\u306E\u8868\u793A\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u5207\u66FF\u3067\u304D\u307E\u3059

\u3053\u306E\u30BF\u30D6\u306F\u9589\u3058\u3066\u69CB\u3044\u307E\u305B\u3093\u3002
`;
  MF();
})();
