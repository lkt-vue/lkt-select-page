<script lang="ts" setup>
import {computed, nextTick, ref, useSlots} from "vue";
import {LktObject} from "lkt-ts-interfaces";

// Emit
const emit = defineEmits(['create', 'results']);

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<{
    page: number
    resource: string
    noResultsText: string
    useResourceSlot: string
    title: string
    label: string
    filters: LktObject
    slotData: LktObject
    addCreateButton: boolean
    createButtonText: string
    createButtonPalette: string
}>(), {
    page: 1,
    title: '',
    label: '',
    resource: '',
    noResultsText: 'No results',
    useResourceSlot: '',
    filters: () => ({}),
    slotData: () => ({}),
    createButtonText: '',
    createButtonPalette: '',
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
        emit('results', r);
    },
    onLoading = () => nextTick(() => loading.value = true),
    doRefresh = () => {
        //@ts-ignore
        paginator.value.doRefresh();
    },
    onCreateClick = () => {
        emit('create');
    };

const finalResourceSlot = computed(() => {
        if (props.useResourceSlot) return props.useResourceSlot;
        if (props.resource) return props.resource;
        return '';
    }),
    displayCreateButton = computed(() => {
        if (loading.value) return false;
        return props.addCreateButton;
    }),
    btnSlots = computed((): LktObject => {
        let r = [];
        for (let k in slots) if (k.startsWith('btn-')) r.push(k);
        return r;
    });

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
                :use-resource-slot="finalResourceSlot"
                v-model="value"
                :options="items"
                :empty-value-text="noResultsText"
                :slot-data="slotData"
            />
        </div>

        <div class="lkt-select-page-buttons" v-if="displayCreateButton">
            <lkt-button @click="onCreateClick" :palette="createButtonPalette">{{ createButtonText }}</lkt-button>
            <template v-for="btn in btnSlots">
                <slot v-bind:name="btn"/>
            </template>
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