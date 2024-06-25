<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const sidebar = ref<HTMLElement | null>(null)

/**
 * Handle the sidebar animation on scroll -> it will follow the scroll within defined limits
 */
const handleScroll = () => {
  if (!sidebar.value) return

  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollRatio = window.scrollY / scrollHeight

  const sidebarHeight = sidebar.value.offsetHeight

  const availableHeight = window.innerHeight - sidebarHeight

  const maxTranslateY = availableHeight * 0.5 // Max y position for the top of the sidebar

  let translateY = maxTranslateY * scrollRatio
  translateY = Math.min(translateY, maxTranslateY)

  sidebar.value.style.transform = `translateY(${translateY}px)`
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const route = useRoute()
</script>

<template>
  <div class="flex justify-center w-full h-full">
    <div ref="sidebar" class="fixed top-[10%] transition-transform duration-300 ease-out">
      <div class="flex flex-row w-full mx-auto">
        <div class="grid grid-rows-7 items-center text-center text-white">
          <RouterLink
            to="/"
            class="p-2 pb-[27.5px] border border-transparent hover:border-beige rounded-t-lg transition-all duration-200 ease-out active:scale-90"
            >{{ $t('home') }}</RouterLink
          >
          <div class="border-r border-r-beige w-1/2 h-full flex-1 self-start"></div>
          <RouterLink
            to="/about"
            class="p-2 py-[27.5px] border hover:border-beige transition-all duration-200 ease-out active:scale-90"
            :class="{
              'uppercase text-beige border-beige': route.name === 'about',
              'border-transparent': route.name !== 'about'
            }"
          >
            {{ $t('about') }}
          </RouterLink>
          <div class="border-r border-r-beige w-1/2 h-full flex-1 self-start"></div>
          <RouterLink
            to=""
            class="p-2 py-[27.5px] border hover:border-beige transition-all duration-200 ease-out active:scale-90"
            :class="{
              'uppercase text-beige border-beige': route.name === 'projects',
              'border-transparent': route.name !== 'projects'
            }"
            >{{ $t('projects') }}</RouterLink
          >
          <div class="border-r border-r-beige w-1/2 h-full flex-1 self-start"></div>
          <RouterLink
            to=""
            class="p-2 py-[27.5px] border hover:border-beige rounded-b-lg transition-all duration-200 ease-out active:scale-90"
            :class="{
              'uppercase text-beige border-beige': route.name === 'links',
              'border-transparent': route.name !== 'links'
            }"
            >{{ $t('links') }}</RouterLink
          >
        </div>
        <!-- SVG drawing -> not responsive -->
        <div class="inline-block relative w-16 align-middle overflow-hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 10 530"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            class="inline-block absolute top-0 left-0"
          >
            <path
              d="M15 0 Q0 74 15 148 M15 148 Q90 265 15 382 M15 382 Q0 456 15 530"
              stroke-width="1.5"
              stroke="#FFEAAE"
              fill="transparent"
              aria-hidden="true"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
