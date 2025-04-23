<script setup>
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import Container from '@/layouts/partials/Container.vue';
import { computed } from 'vue';

const year = computed(() => (new Date).getFullYear());
</script>

<template>
    <footer>
        <Container>
            <div class="bottom-0">
                <div class="text-center pt-80 pb-4">
                    <div class="flex justify-between items-center">
                        <div>
                            <small>Copyright © {{ year }}</small>
                        </div>
                        <div class="flex gap-6">
                            <a 
                                href="https://github.com/AMortimer" 
                                class="border-none"
                                target="_blank">
                                <IconGithub />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/a-mortimer/" 
                                class="border-none"
                                target="_blank">
                                <IconLinkedIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
</template>