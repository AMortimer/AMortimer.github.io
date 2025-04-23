<script setup>
// import { RouterLink } from "vue-router";
// import { onMounted, ref } from "vue";
import Container from "@/layouts/partials/Container.vue";
import Segment from "@/layouts/partials/Segment.vue";
import PortfolioList from "./portfolio/PortfolioList.vue";

// const portfolio = ref([]);

// onMounted(() => {
//   fetch("data/portfolio.json")
//     .then(response => response.json())
//     .then(json => (portfolio.value = json))
//     .catch((err) => console.log(err.message));
// });
</script>

<template>
  <Segment>
    <Container>
      <h2>Portfolio</h2>
      <p>See what I've been working on</p>
      <PortfolioList />
    </Container>
  </Segment>
  <!--<div class="grid grid-cols-2">
    
    <div v-for="project in portfolio" :key="project.id">
        <RouterLink :to="{ name: 'PortfolioEntry', params: { id: project.id }}">
          <img :src="project.thumbnail[0]" alt="Test" class="h-12 text-center mx-auto">
          {{ project.title }}
        </RouterLink>
    </div>
  </div>-->
</template>