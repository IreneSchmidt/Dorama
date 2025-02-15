import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/HomePage',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/AvaliarDorama',
            component: () => import('../views/generic/AvaliarDorama.vue')
        },
        {
            path: '/dorama/:title',
            component: () => import('../views/generic/DoramaDetail.vue')
        },
        {
            path: '/CadastrarDorama',
            component: () => import('../views/CadastrarDorama.vue')
        },
    ]
});

export default router;