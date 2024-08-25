// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import User from '@/views/User.vue'

const routes = [
  {
    path: '/users/:id',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router