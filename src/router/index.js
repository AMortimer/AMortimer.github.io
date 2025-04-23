import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
// import PortfolioEntry from '../components/Partials/PortfolioEntry.vue'
// import NotFound from '../components/Partials/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: HomeView },
        { path: '/portfolio', name: 'Portfolio', component: PortfolioView },
        // { path: '/portfolio/:id', name: 'PortfolioEntry', component: PortfolioEntry, props: true }
    ]
});

export default router