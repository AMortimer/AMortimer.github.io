<script setup>
import { onMounted, ref } from 'vue'

const project = ref(null)

defineProps({
  id: String
})

onMounted(() => {
  fetch('data/portfolio.json')
    .then((response) => response.json())
    .then((json) => project.value = json)
    .catch(err => console.log(err.message))
})
</script>

<template>
  <div v-if="project">
    <div class="grid grid-cols-2">
      <div>
        <h1>{{ project.title }}</h1>
        <div v-html="project.body"></div>
      </div>
      <div>
        <img :src="project.thumbnail[0]" alt="Screenshot of the homepage" class="cover h-96">
        <img :src="project.thumbnail[1]" alt="Screenshot of the homepage" class="cover h-96">
        <img :src="project.thumbnail[2]" alt="Screenshot of the homepage" class="cover h-96">
      </div>
      <div class="grid-cols-2">

      </div>
    </div>
    
  </div>
  <div v-else>
    <p>Loading project</p>
  </div>
</template>

<script>

/*
export default {
  props: ['id', 'body'],
  data() {
      return {
        project: null
      }
    },
  mounted() {
    fetch('http://localhost:3000/portfolio/' + this.id)
    .then(res => res.json())
    .then(data => this.project = data)
    .catch(err => console.log(err.message))
  },
}*/
</script>