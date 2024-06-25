<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps({
  next: {
    type: String,
    required: true
  }
})

const route = useRoute()
</script>

<template>
  <nav>
    <div class="grid grid-cols-4 sm:grid-cols-7 items-center text-center text-white">
      <RouterLink
        to="/"
        class="p-0.5 sm:p-1 md:p-2 md:px-4 text-sm sm:text-base border hover:border-beige rounded-l-lg"
        :class="{
          'uppercase text-beige border-beige': route.name === 'home',
          'border-transparent': route.name !== 'home'
        }"
        >{{ $t('home') }}</RouterLink
      >
      <hr class="hidden sm:block border-beige border" />
      <RouterLink
        to="/about"
        class="p-0.5 sm:p-1 md:p-2 md:px-4 text-sm sm:text-base border hover:border-beige"
        :class="{
          'uppercase text-beige border-beige': route.name === 'about',
          'border-transparent': route.name !== 'about'
        }"
        >{{ $t('about') }}</RouterLink
      >
      <hr class="hidden sm:block border-beige border" />
      <RouterLink
        to=""
        class="p-0.5 sm:p-1 md:p-2 md:px-4 text-sm sm:text-base border hover:border-beige"
        :class="{
          'uppercase text-beige border-beige': route.name === 'projects',
          'border-transparent': route.name !== 'projects'
        }"
        >{{ $t('projects') }}</RouterLink
      >
      <hr class="hidden sm:block border-beige border" />
      <RouterLink
        to=""
        class="p-0.5 sm:p-1 md:p-2 md:px-4 text-sm sm:text-base border hover:border-beige rounded-r-lg"
        :class="{
          'uppercase text-beige border-beige': route.name === 'links',
          'border-transparent': route.name !== 'links'
        }"
        >{{ $t('links') }}</RouterLink
      >
    </div>

    <div class="z-0">
      <svg width="100%" height="100%" viewBox="0 0 602 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 20 Q85 10 170 20 M170 20 Q301 120 432 20 M432 20 Q517 10 602 20"
          stroke-width="2"
          stroke="#FFEAAE"
          fill="transparent"
          aria-hidden="true"
        />
      </svg>
      <RouterLink
        :to="next"
        class="group absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 md:p-2 font-semibold border border-b-[3px] border-b-beige/50 border-r-4 border-r-beige/50 rounded-lg border-beige text-beige hover:bg-beige/20 shadow-lg shadow-black/50 active:shadow-none active:scale-90 transition-all duration-200 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFEAAE"
          class="group-active:translate-y-1 transition-all duration-200 ease-in-out size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
          />
        </svg>
      </RouterLink>
    </div>
  </nav>
</template>
