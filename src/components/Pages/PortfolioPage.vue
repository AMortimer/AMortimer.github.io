<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import IconWrench from "../Icons/IconWrench.vue";
import IconPaintbrush from "../Icons/IconPaintbrush.vue";
import IconLightbulb from "../Icons/IconLightbulb.vue";
import IconRocket from "../Icons/IconRocket.vue";

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
    <h1 class="text-center pb-20">See what I've been working on</h1>
    <div class="grid gap-32">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
        <div class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden">
          <h2>SMESU Explorer Scouts</h2>
          <p class="text-gray-600 text-base">Freelance</p>
          <p>
            My old Explorer Scout group needed a new website to let prospective members find out more and get in touch.
          </p>
          <ul class="text-sm">
            <li class="inline-flex items-center gap-2"><IconLightbulb class="text-sky-900" /> Prototyped using Figma.</li>
            <li class="inline-flex items-center gap-2"><IconWrench class="text-sky-900" />Built and deployed using HTML, Javascript, Astro.</li>
            <li class="inline-flex items-center gap-2"><IconPaintbrush class="text-sky-900" />Styled with SASS.</li>
          </ul>
          <p class="italic text-gray-600 text-sm">Website still in development.</p>
        </div>
        <div class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl">
            <div class="grid grid-cols-2 gap-8">
            <img
              class="col-span-2 rounded shadow"
              src="/src/images/SMESU/smesu-hero-figma.png"
              alt="Screenshot of the homepage on desktop"
            />
          </div>
        </div>
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
        <div class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden">
          <h2>Loomer Medical Group</h2>
          <p class="text-gray-600 text-base">Tree View Designs Ltd</p>
          <p>
            The corporate face of an NHS-affiliated healthcare organisation,
            this site has been designed to advertise their private services.
          </p>
          <ul class="text-sm">
            <li class="inline-flex items-center gap-2"><IconWrench class="text-sky-900" />Built with custom CMS and HTML5</li>
            <li class="inline-flex items-center gap-2"><IconRocket class="text-sky-900" />Deployed with Laravel Forge.</li>
            <li class="inline-flex items-center gap-2"><IconPaintbrush class="text-sky-900" />Styled with Tailwind CSS.</li>
          </ul>
          <p>
            <a
              href="https://www.loomermedical.co.uk/"
              target="_blank"
              title="Loomer Medical Group (opens in new tab)"
            >
              Visit the live website
            </a>
          </p>
        </div>
        <div class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl">
        <div class="grid grid-cols-2 gap-8">
          <img
            class="col-span-2 rounded shadow"
            src="/src/images/loomer-medical-group/Desktop-1.png"
            alt="Screenshot of the homepage on desktop"
          />
          <img
            class="col-span-2 rounded shadow"
            src="/src/images/loomer-medical-group/Desktop-Training.png"
            alt="Screenshot of the Training page on desktop"
          />
          <img
            class="col-span-2 rounded shadow"
            src="/src/images/loomer-medical-group/Desktop-Carehome-2.png"
            alt="Screenshot of the Care Home page"
          />
          <img
            src="/src/images/loomer-medical-group/Mobile-2.png"
            alt="Screenshot on mobile"
            class="h-56 mx-auto"
          />
          <img
            src="/src/images/loomer-medical-group/Mobile-3.png"
            alt="Screenshot on mobile"
            class="h-56 mx-auto"
          />
        </div>
        </div>
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
        <div class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden">
          <h2>Camden Health Partners</h2>
          <p class="text-gray-600 text-base">Freelance</p>
          <p>
            Patient-facing website for a London-based healthcare partnership to
            advertise their services.
          </p>
          <p>Attractive
            London imagery gave this site a personalised feel and enhanced its
            visual appeal.</p>
          <ul class="text-sm">
            <li class="inline-flex items-center gap-2"><IconWrench class="text-sky-900" />Built with custom CMS</li>
            <li class="inline-flex items-center gap-2"><IconRocket class="text-sky-900" />Deployed with Laravel Forge.</li>
            <li class="inline-flex items-center gap-2"><IconPaintbrush class="text-sky-900" />Styled with Tailwind CSS.</li>
          </ul>
          <p class="italic text-gray-600 text-sm">Website still in development.</p>
        </div>
        <div class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl">
        <div class="grid grid-cols-2 gap-8">
          <img
            src="/src/images/camden-health-partnership/Desktop-1.png"
            alt="Screenshot of the website"
            class="col-span-2 rounded shadow"
          />
          <img
            class="col-span-2 rounded shadow"
            src="/src/images/camden-health-partnership/Desktop-3.png"
            alt="Screenshot of the website"
          />
          <img
            class="col-span-2 rounded shadow"
            src="/src/images/camden-health-partnership/Desktop-Contact.png"
            alt="Screenshot of the website"
          />
          <img
            src="/src/images/camden-health-partnership/Mobile-1.png"
            alt="Screenshot of the website on a mobile"
            class="h-56 mx-auto"
          />
          <img
            src="/src/images/camden-health-partnership/Mobile-2.png"
            alt="Screenshot of the website on a mobile"
            class="h-56 mx-auto"
          />
        </div>
        </div>
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
        <div class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden">
          <h2>Keston and Moorings Practice</h2>
          <p class="text-gray-600 text-base">Freelance</p>
          <p>
            Website for a General Practice partnership based in London. Designed two visually matching general practice websites plus a landing page to act as a directory.
          </p>
          <ul class="text-sm">
            <li class="inline-flex items-center gap-2"><IconWrench class="text-sky-900" />Built with custom CMS and HTML5</li>
            <li class="inline-flex items-center gap-2"><IconPaintbrush class="text-sky-900" />Styled with Tailwind CSS.</li>
          </ul>
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
        <div class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl">
        <div class="grid grid-cols-2 gap-8 items-end">
          <img
            src="/src/images/KMP/Desktop-Landing.png"
            alt="Screenshot of the website"
            class="col-span-2 rounded shadow"
          />
          <img
            class="col-span-2 rounded shadow"
            src="/src/images/KMP/Desktop-2.png"
            alt="Screenshot of the website"
          />
          <img
            src="/src/images/KMP/Laptop-1.png"
            alt="Screenshot of the website on a laptop"
          />
          <img
            src="/src/images/KMP/Mobile-1.png"
            alt="Screenshot of the website on a mobile"
            class="h-56 mx-auto"
          />
        </div>
        </div>
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
        <div class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden">
          <h2>The Rules of English</h2>
          <p>Freelance</p>
          <p>
            Website for a writer to display resources on the English language
            and to sell two eBooks relating to the content.
          </p>
          <ul class="text-sm"><li class="inline-flex items-center gap-2"><IconWrench class="text-sky-900" />Built using SquareSpace.</li></ul>
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
        <div class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl">
        <div class="grid grid-cols-2 gap-8">
          <img
            src="/src/images/TROE/Desktop-3.png"
            alt="Screenshot of the website"
            class="col-span-2 rounded shadow"
          />
          <img
            src="/src/images/TROE/mobile-3.png"
            alt="Screenshot of the website on a mobile"
            class="h-56 mx-auto"
          />
          <img
            src="/src/images/TROE/mobile-1.png"
            alt="Screenshot of the website on a mobile"
            class="h-56 mx-auto"
          />
        </div>
        </div>
      </div>
    </div>
  </div>
</template>