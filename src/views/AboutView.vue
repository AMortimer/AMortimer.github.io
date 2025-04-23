<script setup>
import IconDownArrow from '@/components/icons/IconDownArrow.vue';
import Introduction from './about/Introduction.vue';
import Skills from './about/Skills.vue';
import Container from '@/layouts/partials/Container.vue';
import Segment from '@/layouts/partials/Segment.vue';
</script>

<template>
    <Segment>
        <Container>
            <Introduction />
            <Skills />
        </Container>
    </Segment>
</template>