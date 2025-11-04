<script setup>
import { ref } from 'vue';
import Container from './Container.vue';
import Segment from './Segment.vue';
let selected = 0;
let id = document.getElementById("0");

const showPanel = ref(true);

const isSelected = () => {
    return selected = id;
}

function togglePanel() {
    if (isSelected) {
    showPanel.value = !showPanel.value;
    }
}
</script>

<template>
    <Container>
        <Segment>
        <div class="flex gap-2 pb-2 relative">
            <div>
                <h2 
                    id="0"
                    @click.prevent="togglePanel"
                    class="bg-gray-200 p-4 border border-gray-500"
                    >
                    Option 1</h2>        
            </div>
            <div 
                id="1"
                >
                <h2 
                    @click.prevent="togglePanel"
                    class="bg-gray-200 p-4 border border-gray-500"
                    >
                    Option 2</h2>
                
            </div>
        </div>
        <div class="bg-white border border-gray-300 p-8">
            <div 
                v-if="showPanel"
                id="0"
                >
                <p>Content 1</p>
            </div>
            <div 
                v-if="showPanel"
                id="1"
                >
                <p>Content 2</p>
            </div>
        </div>
        </Segment>
    </Container>
</template>
