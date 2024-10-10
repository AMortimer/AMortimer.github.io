<template>
  <div class="p-3">
    <nav class="flex justify-between">
      <!--
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      -->
      <a href="/">Home</a>
      <div class="flex gap-6">
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About Me</a>
      </div>
      
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>