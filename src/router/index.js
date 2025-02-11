import { createRouter, createWebHistory } from 'vue-router'

// 1. Use caminho relativo como solução imediata
import HomeView from '../views/HomeView.vue' // 👈 Corrigido
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CadastrarDorama from '../views/CadastrarDorama.vue';


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
    path: '/CadastrarDorama',
    name: 'CadastrarDorama',
    component: CadastrarDorama,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router