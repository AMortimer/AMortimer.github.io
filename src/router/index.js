import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Pages/HomePage.vue'
import PortfolioPage from '../components/Pages/PortfolioPage.vue'
import PortfolioEntry from '../components/Partials/PortfolioEntry.vue'
import NotFound from '../components/Partials/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/portfolio', name: 'Portfolio', component: PortfolioPage },
        { path: '/portfolio/:id', name: 'PortfolioEntry', component: PortfolioEntry, props: true }
    ]
});

export default router