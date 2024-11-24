<template>
<body class="container text-gray-100">
    <header>
        <Navbar />
    </header>
    <main>
        <RouterView />
    </main>
    <Footer />
</body>

</template>

<script setup>
import Navbar from '/src/components/Partials/Navbar.vue';
import Footer from '/src/components/Partials/Footer.vue';

</script>

