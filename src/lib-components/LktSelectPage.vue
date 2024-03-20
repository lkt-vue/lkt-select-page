<script lang="ts" setup>
// Emits
import {nextTick, PropType, ref, useSlots} from "vue";
import {LktObject} from "lkt-ts-interfaces";

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    page: {type: Number, default: 1},
    resource: {type: String, default: ''},
    noResultsText: {type: String, default: 'No results'},
    title: {type: String, default: ''},
    filters: {type: Object as PropType<LktObject>, default: () => ({})},
    label: {type: String, default: ''},
    useResourceSlot: {type: String, default: ''},
});

const Page = ref(props.page),
    items = ref([]),
    loading = ref(true),
    firstLoadReady = ref(false),
    paginator = ref(null),
    value = ref([]);


const onResults = (r: any) => {
        //@ts-ignore
        if (Array.isArray(r)) items.value = r;
        loading.value = false;
        firstLoadReady.value = true;
        //@ts-ignore
        value.value = items.value.map((z: LktObject) => z.value);
    },
    onLoading = () => nextTick(() => loading.value = true),
    doRefresh = () => {
        //@ts-ignore
        paginator.value.doRefresh();
    };

defineExpose({
    doRefresh
})
</script>


<template>
    <section class="lkt-select-page">
        <header v-if="title || slots.title">
            <h2 v-if="title">{{ title }}</h2>
            <template v-if="slots.title">
                <slot name="title"></slot>
            </template>
        </header>

        <div class="lkt-select-page-buttons" v-if="slots.buttons">
            <slot name="buttons"/>
        </div>

        <div class="lkt-select-page-filters" v-if="firstLoadReady && slots.filters">
            <slot name="filters"/>
        </div>

        <lkt-loader v-if="loading"/>
        
        <div class="lkt-select-page-items" v-if="!loading">
            <lkt-field-select
                multiple
                read-mode
                :label="label"
                :use-resource-slot="useResourceSlot"
                v-model="value"
                :options="items"/>
        </div>

        <div class="lkt-select-page-empty" v-if="!loading && items.length === 0">
            {{noResultsText}}
        </div>

        <lkt-paginator
            ref="paginator"
            v-model="Page"
            v-bind:resource="resource"
            v-bind:filters="filters"
            v-on:results="onResults"
            v-on:loading="onLoading"
        />
    </section>
</template>