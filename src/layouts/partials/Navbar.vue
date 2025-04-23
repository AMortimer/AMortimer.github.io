<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import IconBars from '@/components/icons/IconBars.vue';
import IconX from '@/components/icons/IconX.vue';
import DarkModeToggler from '@/components/DarkModeToggler.vue';
import Container from './Container.vue';

let showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value
}

let links = [
  {id : 0, label : "About Me", link : "#about"},
  {id : 1, label : "Resume", link : "#resume"},
  {id : 2, label : "Portfolio", link : "#portfolio"},
]
</script>

<template id="navbar">
  <Container>
    <div class="flex justify-between items-center">
      <a href="/">Home</a>
      <div class="flex items-center gap-6 md:gap-8">
        <DarkModeToggler />
        <nav>
            <span 
              @click="toggleMenu"
              class="md:hidden cursor-pointer"
              >
              <span>
                <IconX v-show="showMenu" />
              </span>
              <span>
                <IconBars v-show="!showMenu"/>
              </span>
            </span>
            <!-- Mobile -->
            <ul 
              class="bg-white dark:bg-slate-900 bg-opacity-95 dark:bg-opacity-95 md:hidden flex flex-col gap-4 absolute left-0 w-full p-5 transition duration-500 ease-in-out shadow"
              v-show="showMenu"
              >
              <li 
                v-for="link in links" 
                :key="link.id"
                >
                <a 
                  :href="`${link.link}`" 
                  v-smooth-scroll
                  >
                  {{ link.label }}
                </a>
              </li>
            </ul>
            <!-- Desktop -->
            <ul 
              class="hidden md:flex gap-6 mb-0"
              >
              <li 
                v-for="link in links" 
                :key="link.id"
                >
                <a 
                  :href="`${link.link}`" 
                  v-smooth-scroll
                  >
                  {{ link.label }}
                </a>
              </li>
            </ul>
        </nav>
      </div>
    </div>
</Container>
  <!--
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/portfolio">Portfolio</RouterLink>
  -->
</template>