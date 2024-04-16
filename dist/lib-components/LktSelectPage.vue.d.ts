import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    page: number;
    resource: string;
    noResultsText: string;
    useResourceSlot: string;
    title: string;
    label: string;
    filters: LktObject;
    addCreateButton: boolean;
    createButtonText: string;
    createButtonPalette: string;
}>, {
    page: number;
    title: string;
    label: string;
    resource: string;
    noResultsText: string;
    useResourceSlot: string;
    filters: () => {};
    createButtonText: string;
    createButtonPalette: string;
}>, {
    doRefresh: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    results: (...args: any[]) => void;
    create: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    page: number;
    resource: string;
    noResultsText: string;
    useResourceSlot: string;
    title: string;
    label: string;
    filters: LktObject;
    addCreateButton: boolean;
    createButtonText: string;
    createButtonPalette: string;
}>, {
    page: number;
    title: string;
    label: string;
    resource: string;
    noResultsText: string;
    useResourceSlot: string;
    filters: () => {};
    createButtonText: string;
    createButtonPalette: string;
}>>> & {
    onResults?: ((...args: any[]) => any) | undefined;
    onCreate?: ((...args: any[]) => any) | undefined;
}, {
    page: number;
    label: string;
    title: string;
    filters: LktObject;
    resource: string;
    noResultsText: string;
    useResourceSlot: string;
    createButtonText: string;
    createButtonPalette: string;
}, {}>, {
    title?(_: {}): any;
    buttons?(_: {}): any;
    filters?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
