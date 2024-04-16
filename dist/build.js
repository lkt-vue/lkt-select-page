import { defineComponent as D, useSlots as E, ref as r, computed as b, resolveComponent as d, openBlock as t, createElementBlock as o, unref as p, toDisplayString as m, createCommentVNode as l, renderSlot as v, createBlock as j, createVNode as g, withCtx as q, createTextVNode as z, nextTick as F } from "vue";
const G = { class: "lkt-select-page" }, H = { key: 0 }, I = { key: 0 }, J = {
  key: 1,
  class: "lkt-select-page-buttons"
}, K = {
  key: 2,
  class: "lkt-select-page-filters"
}, M = {
  key: 4,
  class: "lkt-select-page-items"
}, O = {
  key: 5,
  class: "lkt-select-page-empty"
}, Q = {
  key: 6,
  class: "lkt-select-page-buttons"
}, W = /* @__PURE__ */ D({
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
  setup(n, { expose: C, emit: R }) {
    const i = E(), s = n, _ = r(s.page), c = r([]), a = r(!0), y = r(!1), h = r(null), f = r([]), B = R, S = (e) => {
      Array.isArray(e) && (c.value = e), a.value = !1, y.value = !0, f.value = c.value.map((u) => u.value), B("results", e);
    }, V = () => F(() => a.value = !0), T = () => {
      h.value.doRefresh();
    }, P = () => {
      B("create");
    }, L = b(() => s.useResourceSlot ? s.useResourceSlot : s.resource ? s.resource : ""), N = b(() => a.value ? !1 : s.addCreateButton);
    return C({
      doRefresh: T
    }), (e, u) => {
      const $ = d("lkt-loader"), A = d("lkt-field-select"), U = d("lkt-button"), w = d("lkt-paginator");
      return t(), o("section", G, [
        e.title || p(i).title ? (t(), o("header", H, [
          e.title ? (t(), o("h2", I, m(e.title), 1)) : l("", !0),
          p(i).title ? v(e.$slots, "title", { key: 1 }) : l("", !0)
        ])) : l("", !0),
        p(i).buttons ? (t(), o("div", J, [
          v(e.$slots, "buttons")
        ])) : l("", !0),
        y.value && p(i).filters ? (t(), o("div", K, [
          v(e.$slots, "filters")
        ])) : l("", !0),
        a.value ? (t(), j($, { key: 3 })) : l("", !0),
        a.value ? l("", !0) : (t(), o("div", M, [
          g(A, {
            multiple: "",
            "read-mode": "",
            label: e.label,
            "use-resource-slot": L.value,
            modelValue: f.value,
            "onUpdate:modelValue": u[0] || (u[0] = (k) => f.value = k),
            options: c.value
          }, null, 8, ["label", "use-resource-slot", "modelValue", "options"])
        ])),
        !a.value && c.value.length === 0 ? (t(), o("div", O, m(e.noResultsText), 1)) : l("", !0),
        N.value ? (t(), o("div", Q, [
          g(U, {
            onClick: P,
            palette: e.createButtonPalette
          }, {
            default: q(() => [
              z(m(e.createButtonText), 1)
            ]),
            _: 1
          }, 8, ["palette"])
        ])) : l("", !0),
        g(w, {
          ref_key: "paginator",
          ref: h,
          modelValue: _.value,
          "onUpdate:modelValue": u[1] || (u[1] = (k) => _.value = k),
          resource: e.resource,
          filters: e.filters,
          onResults: S,
          onLoading: V
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), Y = {
  install: (n) => {
    n.component("lkt-select-page") === void 0 && n.component("lkt-select-page", W);
  }
};
export {
  Y as default
};
