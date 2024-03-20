import { defineComponent as N, useSlots as x, ref as u, resolveComponent as k, openBlock as t, createElementBlock as o, unref as c, toDisplayString as y, createCommentVNode as l, renderSlot as p, createBlock as B, createVNode as S, nextTick as C } from "vue";
const P = { class: "lkt-select-page" }, T = { key: 0 }, $ = { key: 0 }, A = {
  key: 1,
  class: "lkt-select-page-buttons"
}, U = {
  key: 2,
  class: "lkt-select-page-filters"
}, j = {
  key: 4,
  class: "lkt-select-page-items"
}, D = {
  key: 5,
  class: "lkt-select-page-empty"
}, E = /* @__PURE__ */ N({
  __name: "LktSelectPage",
  props: {
    page: { type: Number, default: 1 },
    resource: { type: String, default: "" },
    noResultsText: { type: String, default: "No results" },
    title: { type: String, default: "" },
    filters: { type: Object, default: () => ({}) },
    label: { type: String, default: "" },
    useResourceSlot: { type: String, default: "" }
  },
  setup(e, { expose: h }) {
    const r = x(), m = u(e.page), i = u([]), n = u(!0), g = u(!1), v = u(null), d = u([]), b = (s) => {
      Array.isArray(s) && (i.value = s), n.value = !1, g.value = !0, d.value = i.value.map((a) => a.value);
    }, R = () => C(() => n.value = !0);
    return h({
      doRefresh: () => {
        v.value.doRefresh();
      }
    }), (s, a) => {
      const V = k("lkt-loader"), _ = k("lkt-field-select"), L = k("lkt-paginator");
      return t(), o("section", P, [
        e.title || c(r).title ? (t(), o("header", T, [
          e.title ? (t(), o("h2", $, y(e.title), 1)) : l("", !0),
          c(r).title ? p(s.$slots, "title", { key: 1 }) : l("", !0)
        ])) : l("", !0),
        c(r).buttons ? (t(), o("div", A, [
          p(s.$slots, "buttons")
        ])) : l("", !0),
        g.value && c(r).filters ? (t(), o("div", U, [
          p(s.$slots, "filters")
        ])) : l("", !0),
        n.value ? (t(), B(V, { key: 3 })) : l("", !0),
        n.value ? l("", !0) : (t(), o("div", j, [
          S(_, {
            multiple: "",
            "read-mode": "",
            label: e.label,
            "use-resource-slot": e.useResourceSlot,
            modelValue: d.value,
            "onUpdate:modelValue": a[0] || (a[0] = (f) => d.value = f),
            options: i.value
          }, null, 8, ["label", "use-resource-slot", "modelValue", "options"])
        ])),
        !n.value && i.value.length === 0 ? (t(), o("div", D, y(e.noResultsText), 1)) : l("", !0),
        S(L, {
          ref_key: "paginator",
          ref: v,
          modelValue: m.value,
          "onUpdate:modelValue": a[1] || (a[1] = (f) => m.value = f),
          resource: e.resource,
          filters: e.filters,
          onResults: b,
          onLoading: R
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), z = {
  install: (e) => {
    e.component("lkt-select-page") === void 0 && e.component("lkt-select-page", E);
  }
};
export {
  z as default
};
