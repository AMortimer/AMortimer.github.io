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
    .then(response => response.json())
    .then(json => (triggers.value = json))
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
  <div>
    <div>
      <div class="container text-center">
        <h2>Portfolio</h2>
        <p>See what I've been working on</p>
      </div>
    </div>
    <div class="relative">
      <div class="grid gap-32">
        <div
          class="mx-auto grid max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden"
          >
            <h3>Sud Café</h3>
            <p class="text-zinc-300 text-base">Freelance</p>
            <p>
              Website for a new French cafe in Vancouver's west-end.
            </p>
            <ul class="text-sm">
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconWrench class="text-amber-300" />Designed and built with SquareSpace</span
                >
              </li>
            </ul>
            <p>
              <a
                href="https://www.sudcafe.net/"
                target="_blank"
                title="Sud Café (opens in new tab)"
              >
                Visit the live website
              </a>
            </p>
          </div>
          <div
            class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl"
          >
            <img
              class="rounded shadow"
              src="/src/images/sud-cafe/homepage.png"
              alt="Screenshot of the homepage on desktop"
            />
          </div>
        </div>
        <div
          class="mx-auto grid max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden"
          >
            <h3>Loomer Medical Group</h3>
            <p class="text-zinc-300 text-base">Tree View Designs</p>
            <p>
              The corporate face of an NHS-affiliated healthcare organisation,
              this site has been designed to advertise their private services.
            </p>
            <ul class="text-sm">
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconWrench class="text-amber-300" />Built with CMS</span
                >
              </li>
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconRocket class="text-amber-300" />Deployed with Laravel
                  Forge.</span
                >
              </li>
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconPaintbrush class="text-amber-300" />Styled with Tailwind
                  CSS.</span
                >
              </li>
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
          <div
            class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl"
          >
            <img
              class="rounded shadow"
              src="/src/images/loomer-medical-group/homepage.png"
              alt="Screenshot of the homepage on desktop"
            />
          </div>
        </div>
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden"
          >
            <h3>SMESU Explorer Scouts</h3>
            <p class="text-zinc-300 text-base">Freelance</p>
            <p>
              I am creating a website for my old Explorer Scout group to let
              prospective members find out more and get in touch.
            </p>
            <ul class="text-sm">
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconLightbulb class="text-amber-300" />Designed using
                  Figma.</span
                >
              </li>
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconWrench class="text-amber-300" />Built with
                  HTML, JavaScript, Astro. Deployed with Netlify</span
                >
              </li>
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconPaintbrush class="text-amber-300" />Styled with
                  Open Props.</span
                >
              </li>
            </ul>
            <p>
              <a
                href="https://smesu.netlify.app/"
                target="_blank"
                title="SMESU Netifly Prototype (opens in new tab)"
              >
                Visit the prototype website
              </a>
            </p>
          </div>
          <div
            class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl"
          >
            <div class="grid grid-cols-2 gap-8">
              <img
                class="col-span-2 rounded shadow"
                src="/src/images/SMESU/smesu-hero-figma.png"
                alt="Screenshot of the homepage on desktop"
              />
            </div>
          </div>
        </div>
        
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden"
          >
            <h3>Camden Health Partners</h3>
            <p class="text-zinc-300 text-base">Tree View Designs</p>
            <p>
              Patient-facing website for a London-based healthcare partnership
              to advertise their services.
            </p>
            <p>
              I used attractive London imagery to give this site a personalised feel and
              enhance its visual appeal.
            </p>
            <ul class="text-sm">
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconWrench class="text-amber-300" />Built with
                  CMS.</span
                >
              </li>
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconRocket class="text-amber-300" />Deployed with Laravel
                  Forge.</span
                >
              </li>
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconPaintbrush class="text-amber-300" />Styled with Tailwind
                  CSS.</span
                >
              </li>
            </ul>
            <p class="italic text-zinc-300 text-sm">
              Website still in development.
            </p>
          </div>
          <div
            class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl"
          >
              <img
                src="/src/images/camden-health-partnership/home-page.png"
                alt="Screenshot of the website"
                class="rounded shadow"
              />
          </div>
        </div>
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden"
          >
            <h3>Keston and Moorings Practice</h3>
            <p class="text-zinc-300 text-base">Tree View Designs</p>
            <p>
              Website for a General Practice partnership based in London.
              I designed two visually matching general practice websites plus a
              landing page to act as a directory.
            </p>
            <ul class="text-sm">
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconWrench class="text-amber-300" />Built with custom headless CMS
                  and HTML5.</span
                >
              </li>
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconPaintbrush class="text-amber-300" />Styled with Tailwind
                  CSS.</span
                >
              </li>
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
          <div
            class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl"
          >
          <div class="grid gap-12">
            <img
                src="/src/images/KMP/landing-page.png"
                alt="Screenshot of the website"
                class="rounded shadow"
              />
              <img
                class="rounded shadow"
                src="/src/images/KMP/portland-home.png"
                alt="Screenshot of the website"
              />
          </div>
          </div>
        </div>
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:sticky lg:top-6 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:row-start-1 lg:overflow-hidden"
          >
            <h3>The Rules of English</h3>
            <p>Freelance</p>
            <p>
              Website for a writer to display resources on the English language
              and to sell two eBooks relating to the content.
            </p>
            <ul class="text-sm">
              <li>
                <span class="inline-flex items-center gap-2"
                  ><IconWrench class="text-amber-300" />Designed and built with
                  SquareSpace.</span
                >
              </li>
            </ul>
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
          <div
            class="lg:col-span-2 lg:col-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl"
          >
            <img
              src="/src/images/TROE/contents-page.png"
              alt="Screenshot of the website"
              class="rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>