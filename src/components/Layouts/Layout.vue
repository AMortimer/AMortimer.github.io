<template>    
<body class="bg-gradient-to-tr from-zinc-800 to-slate-800 text-gray-50">
    <div class="container">
        <Navbar />
    <main>
        <RouterView />
    </main>
    <Footer />
    </div>
    
</body>
  
</template>

<script setup>
import Navbar from '/src/components/Partials/Navbar.vue';
import Footer from '/src/components/Partials/Footer.vue';

</script>

