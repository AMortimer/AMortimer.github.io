<script setup>
import Scroller from '../../components/Scroller.vue';
import Segment from '@/layouts/partials/Segment.vue';

const skills = [
    '/src/assets/images/Logos/html.svg',
    '/src/assets/images/Logos/tailwindcss.svg',
    '/src/assets/images/Logos/vuejs.svg',
    '/src/assets/images/Logos/javascript.svg',
    '/src/assets/images/Logos/css.svg',
    '/src/assets/images/Logos/squarespace.svg'
]

</script>

<template>
    <Segment>   
        <Scroller>
            <img
                v-for="skill in skills" 
                :key="skill"
                :src="skill"
                class="h-16 mx-10"
            >
        </Scroller>
    </Segment>
</template>