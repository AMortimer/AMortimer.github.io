<script setup>
import IconGithub from '../Icons/IconGithub.vue';
import IconLinkedIn from '../Icons/IconLinkedIn.vue';
import { computed } from 'vue';

const year = computed(() => (new Date).getFullYear());
</script>

<template>
    <div class="bottom-0">
        <div class="text-center pt-80 pb-4">
            <div class="flex justify-between items-center">
                <div>
                    <small>Copyright © {{ year }}</small>
                </div>
                <div class="flex gap-6">
                    <a 
                        href="https://github.com/AMortimer" 
                        class="text-zinc-300 border-none hover:text-yellow-300"
                        target="_self"
                        title="Github">
                        <IconGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/a-mortimer/" 
                        class="text-zinc-300 border-none hover:text-yellow-300"
                        target="_self"
                        title="LinkedIn">
                        <IconLinkedIn />
                    </a>
                </div>
            </div>
            
        </div>
    </div>
</template>

