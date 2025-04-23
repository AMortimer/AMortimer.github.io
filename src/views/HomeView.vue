<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import Hero from './home/Hero.vue';
import AboutView from './AboutView.vue';
import ResumeView from './ResumeView.vue';
import PortfolioView from './PortfolioView.vue';
</script>

<template>
    <AppLayout title="Welcome to my website">
        <Hero />
        <AboutView id="about"/>
        <ResumeView id="resume" />
        <PortfolioView id="portfolio"/>
    </AppLayout>
</template>