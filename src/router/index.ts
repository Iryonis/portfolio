import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/Test.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    }
  ]
})

export default router
