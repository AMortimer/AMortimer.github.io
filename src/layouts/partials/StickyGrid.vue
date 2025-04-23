<script setup>

const props = defineProps({
title: { type: String },
imageUrl: { type: String },
imageClass: { type: String }
});

</script>

<template>
    <div class="mx-auto grid max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
        <div class="lg:sticky lg:top-20 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden">
            <h3>
                {{ title }}
            </h3>
            <slot />
        </div>
        <div class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl">
            <img
                :src="imageUrl"
                :alt="`Image representing ${title}`"
                class="shadow-2xl border border-slate-300 dark:border-slate-500"
                :class="`${imageClass}`"
                >
        </div>
    </div>
</template>