<template>    
<body class="bg-zinc-100">
    <Navbar />
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

