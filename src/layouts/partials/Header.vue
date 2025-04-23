<script setup>
import Navbar from '@/layouts/partials/Navbar.vue';
import { onMounted, onUnmounted, ref } from 'vue';

// function handleScroll() {
//   console.log("test");
// }

// onMounted(() => {
//   {
//     window.addEventListener('scroll', this.handleScroll);
//   }
// })

// onUnmounted(() => {
//   {
//     window.removeEventListener('scroll', this.handleScroll);
//   }
// })


// handleScroll();

var prevScrollpos = window.scrollY;
// var headerVisible = ref(false);
window.onscroll = function () {
    var header = document.getElementById("header");
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      // headerVisible = ref(true);
    } 
    else {
        header.style.top = "-250px";
        // headerVisible = ref(false);
    }
    prevScrollpos = currentScrollPos;
}
</script>

<template>
    <header 
        id="header" 
        class="sticky top-0 bg-white dark:bg-slate-900 bg-opacity-95 dark:bg-opacity-95 py-2 shadow z-50 transition duration-500 ease-in-out"
        >
        <!-- :class="{ 
          '-top-50': !headerVisible.value,
          'sticky top-0': headerVisible.value
          }" -->
        
            <Navbar />
    </header>
</template>