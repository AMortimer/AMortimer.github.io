<template>
    <div class="h-full">
        <div class="container text-center h-screen content-center">
            <h1>My name is Andy Mortimer</h1>
            <p class="text-xl">Welcome to my website.</p>
        </div>
        <AboutMe id="about"/>
        <PortfolioPage id="portfolio"/>
    </div>
  
</template>

<script setup>
import PortfolioPage from './PortfolioPage.vue';
import AboutMe from './AboutMe.vue'
</script>