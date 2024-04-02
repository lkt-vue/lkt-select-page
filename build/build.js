import { defineComponent as C, useSlots as P, ref as u, computed as T, resolveComponent as k, openBlock as t, createElementBlock as o, unref as d, toDisplayString as S, createCommentVNode as l, renderSlot as m, createBlock as $, createVNode as R, nextTick as A } from "vue";
const U = { class: "lkt-select-page" }, j = { key: 0 }, D = { key: 0 }, E = {
  key: 1,
  class: "lkt-select-page-buttons"
}, O = {
  key: 2,
  class: "lkt-select-page-filters"
}, q = {
  key: 4,
  class: "lkt-select-page-items"
}, w = {
  key: 5,
  class: "lkt-select-page-empty"
}, z = /* @__PURE__ */ C({
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
  setup(e, { expose: _ }) {
    const i = P(), r = e, v = u(r.page), c = u([]), n = u(!0), g = u(!1), y = u(null), f = u([]), b = (s) => {
      Array.isArray(s) && (c.value = s), n.value = !1, g.value = !0, f.value = c.value.map((a) => a.value);
    }, h = () => A(() => n.value = !0), V = () => {
      y.value.doRefresh();
    }, L = T(() => r.useResourceSlot ? r.useResourceSlot : r.resource ? r.resource : "");
    return _({
      doRefresh: V
    }), (s, a) => {
      const N = k("lkt-loader"), x = k("lkt-field-select"), B = k("lkt-paginator");
      return t(), o("section", U, [
        e.title || d(i).title ? (t(), o("header", j, [
          e.title ? (t(), o("h2", D, S(e.title), 1)) : l("", !0),
          d(i).title ? m(s.$slots, "title", { key: 1 }) : l("", !0)
        ])) : l("", !0),
        d(i).buttons ? (t(), o("div", E, [
          m(s.$slots, "buttons")
        ])) : l("", !0),
        g.value && d(i).filters ? (t(), o("div", O, [
          m(s.$slots, "filters")
        ])) : l("", !0),
        n.value ? (t(), $(N, { key: 3 })) : l("", !0),
        n.value ? l("", !0) : (t(), o("div", q, [
          R(x, {
            multiple: "",
            "read-mode": "",
            label: e.label,
            "use-resource-slot": L.value,
            modelValue: f.value,
            "onUpdate:modelValue": a[0] || (a[0] = (p) => f.value = p),
            options: c.value
          }, null, 8, ["label", "use-resource-slot", "modelValue", "options"])
        ])),
        !n.value && c.value.length === 0 ? (t(), o("div", w, S(e.noResultsText), 1)) : l("", !0),
        R(B, {
          ref_key: "paginator",
          ref: y,
          modelValue: v.value,
          "onUpdate:modelValue": a[1] || (a[1] = (p) => v.value = p),
          resource: e.resource,
          filters: e.filters,
          onResults: b,
          onLoading: h
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), G = {
  install: (e) => {
    e.component("lkt-select-page") === void 0 && e.component("lkt-select-page", z);
  }
};
export {
  G as default
};
