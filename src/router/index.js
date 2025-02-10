import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DoramasView from '../views/DoramasView.vue'

const routes = [
  {
    path: '/',
    redirect: '/doramas'
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
    path: '/doramas',
    name: 'doramas',
    component: DoramasView,
    meta: { requiresAuth: true }
>>>>>>> feature/homepage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router