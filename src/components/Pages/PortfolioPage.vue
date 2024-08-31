<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";

const portfolio = ref([]);

onMounted(() => {
  fetch("data/portfolio.json")
    .then((response) => response.json())
    .then((json) => (portfolio.value = json))
    .catch((err) => console.log(err.message));
});
</script>

<template>
  <!--<div class="grid grid-cols-2">
    
    <div v-for="project in portfolio" :key="project.id">
        <RouterLink :to="{ name: 'PortfolioEntry', params: { id: project.id }}">
          <img :src="project.thumbnail[0]" alt="Test" class="h-12 text-center mx-auto">
          {{ project.title }}
        </RouterLink>
    </div>
  </div>-->
  <div class="relative container py-36">
    <h2 class="text-center pb-10">See what I've been working on</h2>
    <div class="grid gap-10">
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h3>Loomer Medical Group</h3>
          <p>Tree View Designs Ltd</p>
          <p>
            The corporate face of an NHS-affiliated healthcare organisation,
            this site has been designed to advertise their private services.
          </p>
          <p>Built using a custom CMS, styled with Tailwind CSS.</p>
          <p>Website still in development.</p>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <img
            class="col-span-2"
            src="/src/images/loomer-medical-group/Desktop-1.png"
            alt="Screenshot of the homepage on desktop"
          />
          <img
            src="/src/images/loomer-medical-group/Desktop-Training.png"
            alt="Screenshot of the Training page on desktop"
          />
          <img
            src="/src/images/loomer-medical-group/Desktop-Carehome-2.png"
            alt="Screenshot of the Care Home page"
          />
          <img
            src="/src/images/loomer-medical-group/Mobile-2.png"
            alt="Screenshot on mobile"
            class="h-48"
          />
          <img
            src="/src/images/loomer-medical-group/Mobile-3.png"
            alt="Screenshot on mobile"
            class="h-48"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h3>Camden Health Partners</h3>
          <p>Tree View Designs Ltd</p>
          <p>
            Patient-facing website for a London-based healthcare partnership to
            advertise their services.
          </p>
          <p>
            Built using a custom CMS, styled with Tailwind CSS. Attractive
            London imagery gave this site a personalised feel and enhanced its
            visual appeal.
          </p>
          <p>Website still in development.</p>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <img
            src="/src/images/camden-health-partnership/Desktop-1.png"
            alt="Screenshot of the website"
            class="col-span-2"
          />
          <img
            src="/src/images/camden-health-partnership/Desktop-3.png"
            alt="Screenshot of the website"
          />
          <img
            src="/src/images/camden-health-partnership/Desktop-Contact.png"
            alt="Screenshot of the website"
          />
          <img
            src="/src/images/camden-health-partnership/Mobile-1.png"
            alt="Screenshot of the website on a mobile"
            class="h-48"
          />
          <img
            src="/src/images/camden-health-partnership/Mobile-2.png"
            alt="Screenshot of the website on a mobile"
            class="h-48"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h3>Keston and Moorings Practice</h3>
          <p>Tree View Designs Ltd</p>
          <p>
            Patient-facing website for a London-based healthcare partnership to
            advertise their services.
          </p>
          <p>
            Built using a custom CMS, styled with Tailwind CSS. Attractive
            London imagery gave this site a personalised feel and enhanced its
            visual appeal.
          </p>
          <p>
            <a
              href="https://www.kestonmooringsmedical.co.uk/"
              target="_blank"
              title="Keston and Moorings Practice (opens in new tab)"
            >
              Visit the live website
            </a>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <img
            src="/src/images/KMP/Desktop-Landing.png"
            alt="Screenshot of the website"
            class="col-span-2"
          />
          <img
            src="/src/images/KMP/Desktop-1.png"
            alt="Screenshot of the website"
          />
          <img
            src="/src/images/KMP/Desktop-2.png"
            alt="Screenshot of the website"
          />
          <img
            src="/src/images/KMP/Laptop-1.png"
            alt="Screenshot of the website on a mobile"
            class=""
          />
          <img
            src="/src/images/KMP/Mobile-1.png"
            alt="Screenshot of the website on a mobile"
            class="h-48"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h3>The Rules of English</h3>
          <p>Freelance</p>
          <p>
            Website for a writer to display resources on the English language
            and to sell two eBooks relating to the content.
          </p>
          <p>Built using a SquareSpace.</p>
          <p>
            <a
              href="https://therulesofenglish.com/"
              target="_blank"
              title="The Rules of English (opens in new tab)"
            >
              Visit the live website
            </a>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <img
            src="/src/images/TROE/Desktop-3.png"
            alt="Screenshot of the website on a laptop"
            class="col-span-2"
          />
          <img
            src="/src/images/TROE/mobile-3.png"
            alt="Screenshot of the website on a mobile"
            class="h-48"
          />
          <img
            src="/src/images/TROE/mobile-1.png"
            alt="Screenshot of the website on a mobile"
            class="h-48"
          />
        </div>
      </div>
    </div>
  </div>
</template>