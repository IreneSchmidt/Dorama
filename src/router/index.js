import { createRouter, createWebHistory } from 'vue-router'

// 1. Use caminho relativo como solução imediata
import HomeView from '../views/HomeView.vue' // 👈 Corrigido
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AvaliarDorama from '../views/generic/AvaliarDorama.vue';




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/AvaliarDorama',
    name: AvaliarDorama,
    component: AvaliarDorama 
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router