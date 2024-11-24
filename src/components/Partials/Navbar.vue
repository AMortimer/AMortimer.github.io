<template>
      <div>
        <nav class="flex justify-between py-3 bg-opacity-95 z-50 bg-slate-900">
            <a href="/">Home</a>
          <div class="flex gap-6">
            <a href="#about" v-smooth-scroll>About Me</a>
            <a href="#portfolio" v-smooth-scroll>Portfolio</a>
          </div>
        </nav>
      </div>
      <!--
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>