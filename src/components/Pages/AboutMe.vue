<script setup>
import IconDownArrow from '../Icons/IconDownArrow.vue';
</script>

<template>
  <div class="h-full">
    <div class="content-center">
      <div class="grid lg:grid-cols-2 items-center gap-8">
        <div>
          <h1></h1>
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
              class="inline-flex items-center gap-2 border-none text-yellow-300 hover:text-amber-200"
              href="#portfolio"
              v-smooth-scroll>
              <span>
                View my portfolio
              </span> 
              <IconDownArrow />
            </a>
          </p>
        </div>
        <div>
          <img src="/src/images/Me/profile-pic.jpeg" alt="A headshot of me" class="rounded-full h-72 mx-auto border-2 border-zinc-500" />
        </div>
      </div>
    </div>
  </div>
</template>