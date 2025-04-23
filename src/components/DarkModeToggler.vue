<script setup>
import { ref, watchEffect, watch } from 'vue';
import IconMoon from './icons/IconMoon.vue';
import IconSun from './icons/IconSun.vue';

let darkMode = ref(localStorage.getItem('dark'));

function saveDarkMode() {
    localStorage.setItem('dark', darkMode.value);
    console.log(darkMode.value);
}

const applyDarkMode = () => document.body.classList[
    darkMode.value ? 'add' : 'remove'
    ]('dark');

    darkMode = ref(document.body.classList.contains('dark'));
    
watchEffect(applyDarkMode);
saveDarkMode();

</script>

<template>
    <label class="cursor-pointer">
        <input 
            type="checkbox" 
            v-model="darkMode"
            class="hidden"
            @input="saveDarkMode"
            >
            <IconMoon v-show="darkMode" class="hover:text-amber-400"/>
            <IconSun v-show="!darkMode" class="hover:text-indigo-800" />
    </label>
    
</template>