<script setup>
  const props = defineProps({
    company: { type: String, required: true },
    dates: { type: String, required: true }
  });
</script>

<template>
    <div class="lg:flex justify-between">
        <h4>
            {{ company }}
        </h4>
        <p class="text-sm text-slate-800 dark:text-slate-300">
            {{ dates }}
        </p>
    </div>
    <ul class="list-disc ml-6">
        <slot />
    </ul>
</template>