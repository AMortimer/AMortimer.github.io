<script setup>
  import { ref } from 'vue';
  import IconChevronDown from '@/components/icons/IconChevronDown.vue';
  import IconChevronRight from '@/components/icons/IconChevronRight.vue';

  const props = defineProps({
    title: { type: String, required: true },
    ariaTitle: { type: String, required: true }
  });

  const showPanel = ref(false);

  const togglePanel = () => {
    showPanel.value = !showPanel.value;
  }
</script>

<template>
    <div class="panel mb-4 border-2 border-slate-200 dark:border-slate-500 rounded-lg shadow-sm">
      <button
        :arial-controls="'accordion-content-' + ariaTitle"
        :id="'accordion-control-' + ariaTitle"
        @click.prevent="togglePanel"
        class="p-4 w-full border-b-2 border-slate-200 dark:border-slate-500 font-semibold flex flex-row items-center justify-between">
        {{ title }}
        <span
          v-if="showPanel">
          <IconChevronDown/>
        </span>
        <span
          v-else>
          <IconChevronRight />
        </span>
      </button>
      <div
        :aria-hidden="!showPanel"
        :id="'content-' + ariaTitle"
        class="p-4"
        v-if="showPanel">
        <slot />
      </div>
    </div>
  </template>