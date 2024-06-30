import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/Test.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/',
      component: () => import('../components/BodyLayout.vue'),
      children: [
        { path: '/about', name: 'about', component: () => import('../components/body/About.vue') },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('../components/body/Projects.vue')
        },
        {
          path: '/links',
          name: 'links',
          component: () => import('../components/body/Links.vue')
        }
      ]
    }
  ]
})

export default router

/**
 * {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFoundComponent // Votre composant Vue pour la page 404
}
 */
