<script setup>
import StickyGrid from "@/layouts/partials/StickyGrid.vue";

const props = defineProps({
  company: { type: String },
  image: { type: String },
  workType: { type: String },
  websiteUrl: { type: String },
  status: { type: String },
});
</script>
<template>
  <StickyGrid 
    :imageUrl="`${image}`" 
    :title="`${company}`"
    imageClass="rounded"
    >
    <p class="text-base">{{ workType }}</p>
    <div>
      <slot name="description" />
    </div>
    <ul class="text-sm">
      <slot />
    </ul>
    <p>
      <a v-if="websiteUrl" :href="`${websiteUrl}`" :status="`${status}`">
        <span v-if="status === 'live'"> Visit the live website </span>
        <span v-else-if="status === 'draft'">
          Visit the prototype website
        </span>
      </a>
      <span v-else class="italic"> Website still in development </span>
    </p>
  </StickyGrid>
</template>