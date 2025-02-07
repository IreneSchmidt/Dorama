import { createRouter, createWebHistory } from 'vue-router'
import DoramaList from '../components/DoramaList.vue'

const routes = [
  { 
    path: '/:catchAll(.*)*', // Adicione esta rota de fallback
    redirect: '/' 
  },
  { 
    path: '/',
    name: 'Home',
    component: DoramaList
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router