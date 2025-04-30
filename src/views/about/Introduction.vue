<script setup>
import IconDownArrow from '@/components/icons/IconDownArrow.vue';
import StickyGrid from '../../layouts/partials/StickyGrid.vue';
import Segment from '@/layouts/partials/Segment.vue';
</script>

<template>
  <Segment>
    <StickyGrid 
        imageUrl="/assets/images/me/profile-pic.jpeg"
        imageClass="rounded-full mx-auto h-auto lg:h-96"
        >
        <h2>About Me</h2>
          <p>Originally from Edinburgh, Scotland, I have recently relocated to Vancouver, BC.</p>
          <p>
            I am constantly challenging myself to get better at what I do. I
            currently work as a front-end designer and I'm keen to broaden my
            horizons.
          </p>
          <p>
            When I'm not designing, you'll find me in the mountains, on a
            climbing wall, or playing guitar.
          </p>
          <p>
            <a 
              class="inline-flex items-center gap-2"
              href="#portfolio"
              v-smooth-scroll>
              <span>
                View my portfolio
              </span> 
              <IconDownArrow />
            </a>
          </p>
    </StickyGrid>
  </Segment>
</template>