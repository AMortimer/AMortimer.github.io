<script setup>
import Header from './partials/Header.vue';
import Footer from './partials/Footer.vue';

defineProps({
    title: String
});
</script>

<template>
    <head :title="title" ></head>
    <body class="text-slate-900 dark:text-white bg-white dark:bg-slate-800">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </body>
</template>

