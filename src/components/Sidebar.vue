<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const sidebar = ref<HTMLElement | null>(null)

// Refs for the absolute elements
const about = ref<HTMLElement | null>(null)
const projects = ref<HTMLElement | null>(null)
const links = ref<HTMLElement | null>(null)

const refs = [about, projects, links]

/**
 * Watch the route path and reset the height of the absolute elements when it changes
 */
watch(
  () => route.path,
  () => {
    resetHeight()
  }
)

/**
 * Handle the sidebar animation on scroll -> it will follow the scroll within defined limits
 */
const handleScroll = () => {
  if (!sidebar.value) return

  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight // Height of the scrollable area
  const scrollRatio = window.scrollY / scrollHeight

  const sidebarHeight = sidebar.value.offsetHeight // Height of the sidebar

  const maxTranslateY = (window.innerHeight - sidebarHeight) * 0.5 // Max y position for the top of the sidebar

  let translateY = Math.min(maxTranslateY * scrollRatio, maxTranslateY)

  sidebar.value.style.transform = `translateY(${translateY}px)`

  heightAbsoluteElements(scrollRatio)
}

/**
 * Change the height of the absolute elements to reflect the scroll position
 * -> Simulates the position of the user on the sidebar
 *
 * @param {number} scrollRatio - The ratio of the scroll position
 */
const heightAbsoluteElements = (scrollRatio: number) => {
  refs.forEach((ref) => {
    if (ref.value?.parentElement?.classList.contains('height-change')) {
      const newHeight = ref.value.parentElement.clientHeight * scrollRatio
      ref.value.style.height = `${newHeight}px`
    }
  })
}

/**
 * Reset the height of the absolute elements
 */
const resetHeight = () => {
  refs.forEach((ref) => {
    if (ref.value?.style) {
      ref.value.style.height = '0px'
    }
  })
}

/**
 * Change the style of the links depending on the current route
 *
 * @param {string} path - The path to compare with the current route
 */
const styleCurrentRoute = (path: string) => {
  return route.name === path ? 'text-beige border-beige height-change' : 'border-transparent'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="flex justify-center w-full h-full">
    <div ref="sidebar" class="fixed top-[10%] transition-transform duration-300 ease-out">
      <div class="flex flex-row w-full mx-auto">
        <div class="grid grid-rows-7 items-center text-center text-white">
          <RouterLink
            :to="{ name: 'home' }"
            class="p-2 pb-7 border border-transparent hover:border-beige hover:animate-border_shining rounded-t-lg transition-all duration-200 ease-out active:scale-90"
          >
            {{ $t('home_link') }}</RouterLink
          >
          <div class="border-r border-r-beige w-1/2 row-span-2 h-full flex-1 self-start"></div>
          <RouterLink
            :to="{ name: 'about' }"
            class="relative p-2 py-7 border hover:border-beige hover:animate-border_shining transition-all duration-200 ease-out active:scale-90"
            :class="styleCurrentRoute('about')"
          >
            <div ref="about" class="absolute top-0 left-0 w-full bg-black/50"></div>
            <span class="relative z-10">{{ $t('about_link') }}</span>
          </RouterLink>
          <div class="border-r border-r-beige w-1/2 row-span-2 h-full flex-1 self-start"></div>
          <RouterLink
            :to="{ name: 'projects' }"
            class="relative p-2 pt-7 border hover:border-beige hover:animate-border_shining rounded-b-lg transition-all duration-200 ease-out active:scale-90"
            :class="styleCurrentRoute('projects')"
          >
            <div ref="projects" class="absolute top-0 left-0 w-full bg-black/50"></div>
            <span class="relative z-10">{{ $t('projects_link') }}</span>
          </RouterLink>
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
