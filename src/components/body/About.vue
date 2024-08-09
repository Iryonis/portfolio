<script setup lang="ts">
import { ref } from 'vue'
import AboutText from './about/AboutText.vue'
import Skills from './Skills/Skills.vue'
import Career from './about/Career.vue'

let about = ref(true)
let about_animation = ref(true)

const changeDisplayedObject = () => {
  about_animation.value = !about.value
  setTimeout(() => (about.value = !about.value), 800)
}
</script>

<template>
  <!-- About displayed -->

  <div class="grid md:grid-cols-4 md:col-span-4 m-8 md:mb-12" :class="{ hidden: !about }">
    <div class="md:ml-0" :class="about ? 'md:col-span-3' : 'hidden'">
      <div
        class="h-full flex flex-col gap-8"
        :class="{ 'animate-text_animation': !about_animation }"
      >
        <AboutText /><Career />
      </div>
    </div>

    <div
      class="mt-4 md:mt-0 md:ml-4 md:col-span-1"
      :class="{ hidden: !about }"
      @click="changeDisplayedObject()"
    >
      <div
        class="group_anim_underl group h-full flex items-center justify-center border border-beige shadow-lg shadow-black/70 bg-beige/10 text-white hover:bg-beige/20 active:scale-95 rounded-r-full cursor-pointer"
        :class="{ 'animate-skills_button_animation': !about_animation }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="size-6 m-4 group-hover:scale-110 group-hover:-translate-x-1/2 duration-500 group-active:scale-95"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <div>
          <h2 class="text-xl animated_underline font-bold">{{ $t('skills') }}</h2>
          <h3 class="text-lg">{{ $t('see_more') }}</h3>
        </div>
      </div>
    </div>
  </div>

  <!-- Skills displayed -->
  <div class="grid md:grid-cols-4 md:col-span-4 m-8 md:mb-12" :class="{ hidden: about }">
    <div
      class="mb-4 md:mb-0 md:col-span-1"
      :class="{ hidden: about }"
      @click="changeDisplayedObject()"
    >
      <div
        class="group_anim_underl group h-full flex items-center justify-center border border-beige shadow-lg shadow-black/70 bg-white/10 text-white hover:bg-white/20 active:scale-95 rounded-l-full cursor-pointer"
        :class="{ 'animate-about_button_animation': about_animation }"
      >
        <div>
          <h2 class="text-xl animated_underline font-bold">{{ $t('about_link') }}</h2>
          <h3 class="text-lg">{{ $t('see_more') }}</h3>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="size-6 m-4 group-hover:scale-110 group-hover:translate-x-1/2 duration-500 group-active:scale-95"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
    <div class="md:mr-16 md:ml-4" :class="about ? 'hidden' : 'md:col-span-3'">
      <div
        class="h-full flex flex-col gap-4 justify-between"
        :class="{ 'animate-text_animation': about_animation }"
      >
        <Skills />
      </div>
    </div>
  </div>
</template>
