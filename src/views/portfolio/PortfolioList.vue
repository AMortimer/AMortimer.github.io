<script setup>
import StickyGrid from "@/layouts/partials/StickyGrid.vue";
import PortfolioItem from "./PortfolioItem.vue";

import IconWrench from "@/components/icons/IconWrench.vue";
import IconPaintbrush from "@/components/icons/IconPaintbrush.vue";
import IconLightbulb from "@/components/icons/IconLightbulb.vue";
import IconRocket from "@/components/icons/IconRocket.vue";
</script>

<template>
  <div class="grid gap-32">
    <!-- Sud Cafe -->
    <PortfolioItem
      image="/src/assets/images/sud-cafe/homepage.png"
      company="Sud Café"
      workType="Freelance"
      websiteUrl="https://www.sudcafe.net/"
      status="live"
    >
      <template #description>
        <p>Website for a new French cafe in Vancouver's west-end.</p>
      </template>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconWrench class="text-indigo-800 dark:text-amber-300" />Designed and built with
          SquareSpace</span
        >
      </li>
    </PortfolioItem>
    <!-- Loomer Medical -->
    <PortfolioItem
      image="/src/assets/images/loomer-medical-group/homepage.png"
      company="Loomer Medical Group"
      workType="Tree View Designs"
      websiteUrl="https://www.loomermedical.co.uk/"
      status="live"
    >
      <template #description>
        <p>
          The corporate face of an NHS-affiliated healthcare organisation, this
          site has been designed to advertise their private services.
        </p>
      </template>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconWrench class="text-indigo-800 dark:text-amber-300" />Built with CMS</span
        >
      </li>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconRocket class="text-indigo-800 dark:text-amber-300" />Deployed with Laravel
          Forge.</span
        >
      </li>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconPaintbrush class="text-indigo-800 dark:text-amber-300" />Styled with Tailwind
          CSS.</span
        >
      </li>
    </PortfolioItem>

    <!-- SMESU -->
    <PortfolioItem
      image="/src/assets/images/SMESU/homepage.png"
      company="SMESU Explorer Scouts"
      workType="Freelance"
      websiteUrl="https://smesu.netlify.app/"
      status="draft"
    >
      <template #description>
        <p>
          I am creating a website for my old Explorer Scout group to let
          prospective members find out more and get in touch.
        </p>
      </template>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconLightbulb class="text-indigo-800 dark:text-amber-300" />Designed using Figma.</span
        >
      </li>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconWrench class="text-indigo-800 dark:text-amber-300" />Built with HTML, JavaScript,
          Astro. Deployed with Netlify</span
        >
      </li>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconPaintbrush class="text-indigo-800 dark:text-amber-300" />Styled with Open
          Props.</span
        >
      </li>
    </PortfolioItem>
    <!-- Camden Health Partners -->
    <PortfolioItem
      image="/src/assets/images/camden-health-partnership/home-page.png"
      company="Camden Health Partners"
      workType="Tree View Designs"
    >
      <template #description>
        <p>
          Patient-facing website for a London-based healthcare partnership to
          advertise their services.
        </p>
        <p>
          I used attractive London imagery to give this site a personalised feel
          and enhance its visual appeal.
        </p>
      </template>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconWrench class="text-indigo-800 dark:text-amber-300" />Built with CMS.</span
        >
      </li>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconRocket class="text-indigo-800 dark:text-amber-300" />Deployed with Laravel
          Forge.</span
        >
      </li>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconPaintbrush class="text-indigo-800 dark:text-amber-300" />Styled with Tailwind
          CSS.</span
        >
      </li>
    </PortfolioItem>

    <!-- KMP -->
    <PortfolioItem
      image="/src/assets/images/kmp/portland-home.png"
      company="Keston and Moorings Practice"
      workType="Tree View Designs"
      websiteUrl="https://www.kestonmooringsmedical.co.uk/"
      status="live"
    >
      <template #description>
        <p>
          Website for a General Practice partnership based in London. I designed
          two visually matching general practice websites plus a landing page to
          act as a directory.
        </p>
      </template>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconWrench class="text-indigo-800 dark:text-amber-300" />Built with CMS.</span
        >
      </li>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconPaintbrush class="text-indigo-800 dark:text-amber-300" />Styled with Tailwind
          CSS.</span
        >
      </li>
    </PortfolioItem>
    <!-- TROE -->
    <PortfolioItem
      image="/src/assets/images/TROE/contents-page.png"
      company="The Rules of English"
      workType="Freelance"
      websiteUrl="https://therulesofenglish.com/"
      status="live"
    >
      <template #description>
        <p>
          Website for a writer to display resources on the English language and
          to sell two eBooks relating to the content.
        </p>
      </template>
      <li>
        <span class="inline-flex items-center gap-2"
          ><IconWrench class="text-indigo-800 dark:text-amber-300" />Designed and built with
          SquareSpace.</span
        >
      </li>
    </PortfolioItem>
  </div>
</template>