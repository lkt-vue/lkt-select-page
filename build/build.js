import { defineComponent as E, useSlots as F, ref as u, computed as v, resolveComponent as p, openBlock as t, createElementBlock as o, unref as f, toDisplayString as g, createCommentVNode as s, renderSlot as k, createBlock as W, createVNode as _, withCtx as j, createTextVNode as q, Fragment as z, renderList as G, nextTick as H } from "vue";
const I = { class: "lkt-select-page" }, J = { key: 0 }, K = { key: 0 }, M = {
  key: 1,
  class: "lkt-select-page-buttons"
}, O = {
  key: 2,
  class: "lkt-select-page-filters"
}, Q = {
  key: 4,
  class: "lkt-select-page-items"
}, X = {
  key: 5,
  class: "lkt-select-page-empty"
}, Y = {
  key: 6,
  class: "lkt-select-page-buttons"
}, Z = /* @__PURE__ */ E({
  __name: "LktSelectPage",
  props: {
    page: { default: 1 },
    resource: { default: "" },
    noResultsText: { default: "No results" },
    useResourceSlot: { default: "" },
    title: { default: "" },
    label: { default: "" },
    filters: { default: () => ({}) },
    addCreateButton: { type: Boolean },
    createButtonText: { default: "" },
    createButtonPalette: { default: "" }
  },
  emits: ["create", "results"],
  setup(c, { expose: C, emit: R }) {
    const y = R, n = F(), a = c, h = u(a.page), d = u([]), r = u(!0), b = u(!1), B = u(null), m = u([]), S = (e) => {
      Array.isArray(e) && (d.value = e), r.value = !1, b.value = !0, m.value = d.value.map((l) => l.value), y("results", e);
    }, V = () => H(() => r.value = !0), T = () => {
      B.value.doRefresh();
    }, L = () => {
      y("create");
    }, P = v(() => a.useResourceSlot ? a.useResourceSlot : a.resource ? a.resource : ""), N = v(() => r.value ? !1 : a.addCreateButton), $ = v(() => {
      let e = [];
      for (let l in n)
        l.startsWith("btn-") && e.push(l);
      return e;
    });
    return C({
      doRefresh: T
    }), (e, l) => {
      const A = p("lkt-loader"), U = p("lkt-field-select"), w = p("lkt-button"), D = p("lkt-paginator");
      return t(), o("section", I, [
        e.title || f(n).title ? (t(), o("header", J, [
          e.title ? (t(), o("h2", K, g(e.title), 1)) : s("", !0),
          f(n).title ? k(e.$slots, "title", { key: 1 }) : s("", !0)
        ])) : s("", !0),
        f(n).buttons ? (t(), o("div", M, [
          k(e.$slots, "buttons")
        ])) : s("", !0),
        b.value && f(n).filters ? (t(), o("div", O, [
          k(e.$slots, "filters")
        ])) : s("", !0),
        r.value ? (t(), W(A, { key: 3 })) : s("", !0),
        r.value ? s("", !0) : (t(), o("div", Q, [
          _(U, {
            multiple: "",
            "read-mode": "",
            label: e.label,
            "use-resource-slot": P.value,
            modelValue: m.value,
            "onUpdate:modelValue": l[0] || (l[0] = (i) => m.value = i),
            options: d.value
          }, null, 8, ["label", "use-resource-slot", "modelValue", "options"])
        ])),
        !r.value && d.value.length === 0 ? (t(), o("div", X, g(e.noResultsText), 1)) : s("", !0),
        N.value ? (t(), o("div", Y, [
          _(w, {
            onClick: L,
            palette: e.createButtonPalette
          }, {
            default: j(() => [
              q(g(e.createButtonText), 1)
            ]),
            _: 1
          }, 8, ["palette"]),
          (t(!0), o(z, null, G($.value, (i) => k(e.$slots, i)), 256))
        ])) : s("", !0),
        _(D, {
          ref_key: "paginator",
          ref: B,
          modelValue: h.value,
          "onUpdate:modelValue": l[1] || (l[1] = (i) => h.value = i),
          resource: e.resource,
          filters: e.filters,
          onResults: S,
          onLoading: V
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), ee = {
  install: (c) => {
    c.component("lkt-select-page") === void 0 && c.component("lkt-select-page", Z);
  }
};
export {
  ee as default
};
