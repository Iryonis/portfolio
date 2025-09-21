<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
  destination: {
    type: String,
    required: true
  }
})

const router = useRouter()

const handleNavigation = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  router.push(props.destination)
}
</script>

<template>
  <div class="z-0">
    <button
      @click="handleNavigation()"
      class="group absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 md:p-2 font-semibold border border-b-[3px] border-b-beige/50 border-r-4 border-r-beige/50 rounded-lg border-beige text-beige hover:animate-button_shining shadow-lg shadow-black/50 active:shadow-none active:scale-90 transition-all duration-200 ease-in-out"
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
    </button>
  </div>
</template>
