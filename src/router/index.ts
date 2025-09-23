import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home page
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },

    // Wrapper for About and Projects (sidebar + next content)
    {
      path: '/app',
      component: () => import('../components/AppLayout.vue'),
      children: [
        {
          path: 'about', // About page URL: /app/about
          name: 'about',
          component: () => import('../components/app/About.vue')
        },
        {
          path: 'projects', // Projects page URL: /app/projects
          name: 'projects',
          component: () => import('../components/app/Projects.vue')
        }
      ]
    },

    // Error 404 - Redirect to Home
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],

  // Smooth scroll to top on route change
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// Update document title based on route name
router.beforeEach((to) => {
  const titles: Record<string, string> = {
    home: 'Guilhem BONNEFOUS | Portfolio',
    about: 'About - Guilhem BONNEFOUS',
    projects: 'Projects - Guilhem BONNEFOUS'
  }

  document.title = titles[to.name as string] || 'Guilhem BONNEFOUS | Portfolio'
})

export default router
