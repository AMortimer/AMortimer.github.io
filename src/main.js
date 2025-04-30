import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '/src/css/index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import Vue3Marquee from 'vue3-marquee'

const app = createApp(App).use(Vue3Marquee).use(VueSmoothScroll)

app.use(router)

app.mount('#app')
