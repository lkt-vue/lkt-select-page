import { PropType } from "vue";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    page: {
        type: NumberConstructor;
        default: number;
    };
    resource: {
        type: StringConstructor;
        default: string;
    };
    noResultsText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    filters: {
        type: PropType<LktObject>;
        default: () => {};
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    useResourceSlot: {
        type: StringConstructor;
        default: string;
    };
}, {
    doRefresh: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: NumberConstructor;
        default: number;
    };
    resource: {
        type: StringConstructor;
        default: string;
    };
    noResultsText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    filters: {
        type: PropType<LktObject>;
        default: () => {};
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    useResourceSlot: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    page: number;
    label: string;
    title: string;
    filters: LktObject;
    resource: string;
    noResultsText: string;
    useResourceSlot: string;
}, {}>, {
    title?(_: {}): any;
    buttons?(_: {}): any;
    filters?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
