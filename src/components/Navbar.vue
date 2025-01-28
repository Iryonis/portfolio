<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * Change the style of the links depending on the current route
 *
 * @param {string} path - The path to compare with the current route
 */
const styleCurrentRoute = (path: string) => {
  return route.name === path ? 'text-beige border-beige' : 'border-transparent'
}
</script>

<template>
  <nav>
    <div class="grid grid-cols-3 sm:grid-cols-7 items-center text-center text-white">
      <RouterLink
        :to="{ name: 'home' }"
        class="w-24 p-0.5 sm:p-1 md:p-2 md:px-4 text-sm sm:text-base border hover:border-beige hover:animate-border_shining rounded-l-lg"
        :class="styleCurrentRoute('home')"
        >{{ $t('home_link') }}</RouterLink
      >
      <hr class="hidden sm:block col-span-2 border-beige border" />
      <RouterLink
        :to="{ name: 'about' }"
        class="w-24 p-0.5 sm:p-1 md:p-2 md:px-4 text-sm sm:text-base border hover:border-beige hover:animate-border_shining"
        :class="styleCurrentRoute('about')"
        >{{ $t('about_link') }}</RouterLink
      >
      <hr class="hidden sm:block col-span-2 border-beige border" />
      <RouterLink
        :to="{ name: 'projects' }"
        class="w-24 p-0.5 sm:p-1 md:p-2 md:px-4 text-sm sm:text-base border hover:border-beige hover:animate-border_shining rounded-r-lg"
        :class="styleCurrentRoute('projects')"
        >{{ $t('projects_link') }}</RouterLink
      >
    </div>
    <svg width="100%" height="100%" viewBox="0 0 602 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 20 Q85 10 170 20 M170 20 Q301 120 432 20 M432 20 Q517 10 602 20"
        stroke-width="2"
        stroke="#FFEAAE"
        fill="transparent"
        aria-hidden="true"
      />
    </svg>
  </nav>
</template>
