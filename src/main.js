import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App).use(router).use(VueSmoothScroll).mount('#app')
