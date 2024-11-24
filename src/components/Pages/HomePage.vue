<template>
    <div class="h-full">
        <div class="container text-center h-screen content-center">
            <h1>My name is <br class="block md:hidden"/>Andy Mortimer</h1>
            <p class="text-xl">Welcome to my website.</p>
        </div>
        <AboutMe id="about" class="py-20"/>
        <PortfolioPage id="portfolio" class="py-20"/>
    </div>
  
</template>

<script setup>
import PortfolioPage from './PortfolioPage.vue';
import AboutMe from './AboutMe.vue'
</script>