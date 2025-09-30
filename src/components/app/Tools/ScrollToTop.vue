<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollPosition = ref(0)

/**
 * Update the scroll position on scroll
 */
const handleScroll = () => {
  scrollPosition.value = window.scrollY
}

/**
 * Scroll back to the top of the page smoothly
 */
const goBackUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    @click="goBackUp"
    class="group bg-[#102b3f]/80 sm:bg-transparent p-1 md:p-2 font-semibold border border-b-[3px] border-b-beige/50 border-r-[3px] sm:border-r-4 border-r-beige/50 rounded-lg border-beige text-beige hover:animate-button_shining shadow-lg shadow-black/50 active:shadow-none active:scale-90 transition-all duration-200 ease-in-out"
    :class="scrollPosition > 100 ? 'block' : 'hidden'"
    aria-label="Scroll to the top of the page"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
      class="group-active:-translate-y-1 transition-all duration-200 ease-in-out size-5 sm:size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
      />
    </svg>
  </button>
</template>
