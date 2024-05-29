import { defineComponent as E, useSlots as F, ref as u, computed as v, resolveComponent as c, openBlock as l, createElementBlock as o, unref as p, toDisplayString as B, createCommentVNode as s, renderSlot as f, createBlock as W, createVNode as g, withCtx as j, createTextVNode as q, Fragment as z, renderList as G, nextTick as H } from "vue";
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
  class: "lkt-select-page-buttons"
}, Y = /* @__PURE__ */ E({
  __name: "LktSelectPage",
  props: {
    page: { default: 1 },
    resource: { default: "" },
    noResultsText: { default: "No results" },
    useResourceSlot: { default: "" },
    title: { default: "" },
    label: { default: "" },
    filters: { default: () => ({}) },
    slotData: { default: () => ({}) },
    addCreateButton: { type: Boolean },
    createButtonText: { default: "" },
    createButtonPalette: { default: "" }
  },
  emits: ["create", "results"],
  setup(d, { expose: C, emit: R }) {
    const y = R, r = F(), a = d, _ = u(a.page), k = u([]), n = u(!0), b = u(!1), h = u(null), m = u([]), S = (e) => {
      Array.isArray(e) && (k.value = e), n.value = !1, b.value = !0, m.value = k.value.map((t) => t.value), y("results", e);
    }, V = () => H(() => n.value = !0), T = () => {
      h.value.doRefresh();
    }, L = () => {
      y("create");
    }, P = v(() => a.useResourceSlot ? a.useResourceSlot : a.resource ? a.resource : ""), N = v(() => n.value ? !1 : a.addCreateButton), $ = v(() => {
      let e = [];
      for (let t in r)
        t.startsWith("btn-") && e.push(t);
      return e;
    });
    return C({
      doRefresh: T
    }), (e, t) => {
      const D = c("lkt-loader"), A = c("lkt-field-select"), U = c("lkt-button"), w = c("lkt-paginator");
      return l(), o("section", I, [
        e.title || p(r).title ? (l(), o("header", J, [
          e.title ? (l(), o("h2", K, B(e.title), 1)) : s("", !0),
          p(r).title ? f(e.$slots, "title", { key: 1 }) : s("", !0)
        ])) : s("", !0),
        p(r).buttons ? (l(), o("div", M, [
          f(e.$slots, "buttons")
        ])) : s("", !0),
        b.value && p(r).filters ? (l(), o("div", O, [
          f(e.$slots, "filters")
        ])) : s("", !0),
        n.value ? (l(), W(D, { key: 3 })) : s("", !0),
        n.value ? s("", !0) : (l(), o("div", Q, [
          g(A, {
            multiple: "",
            "read-mode": "",
            label: e.label,
            "use-resource-slot": P.value,
            modelValue: m.value,
            "onUpdate:modelValue": t[0] || (t[0] = (i) => m.value = i),
            options: k.value,
            "empty-value-text": e.noResultsText,
            "slot-data": e.slotData
          }, null, 8, ["label", "use-resource-slot", "modelValue", "options", "empty-value-text", "slot-data"])
        ])),
        N.value ? (l(), o("div", X, [
          g(U, {
            onClick: L,
            palette: e.createButtonPalette
          }, {
            default: j(() => [
              q(B(e.createButtonText), 1)
            ]),
            _: 1
          }, 8, ["palette"]),
          (l(!0), o(z, null, G($.value, (i) => f(e.$slots, i)), 256))
        ])) : s("", !0),
        g(w, {
          ref_key: "paginator",
          ref: h,
          modelValue: _.value,
          "onUpdate:modelValue": t[1] || (t[1] = (i) => _.value = i),
          resource: e.resource,
          filters: e.filters,
          onResults: S,
          onLoading: V
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), x = {
  install: (d) => {
    d.component("lkt-select-page") === void 0 && d.component("lkt-select-page", Y);
  }
};
export {
  x as default
};
