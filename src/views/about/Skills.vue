<script setup>
import Scroller from '../../components/Scroller.vue';
import Segment from '@/layouts/partials/Segment.vue';

const skills = [
    '/assets/images/logos/html.svg',
    '/assets/images/logos/tailwindcss.svg',
    '/assets/images/logos/vuejs.svg',
    '/assets/images/logos/javascript.svg',
    '/assets/images/logos/css.svg',
    '/assets/images/logos/squarespace.svg'
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