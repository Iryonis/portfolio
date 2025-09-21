<script setup lang="ts">
import githubImage from '@/assets/img/logo/github.svg'
import linkedinImage from '@/assets/img/logo/linkedin.webp'
import mailImage from '@/assets/img/logo/gmail.webp'
import SunflowerIcon from '@/components/SVG/SunflowerIcon.vue'
import PlantIcon from '@/components/SVG/PlantIcon.vue'
import { ref } from 'vue'

let isCopied = ref(false)

const copyMailToClipboard = async () => {
  try {
    await navigator.clipboard.writeText('bonnefousguilhem@gmail.com')
    setTimeout(() => {
      isCopied.value = true
    }, 50)
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy email to clipboard:', error)
  }
}
</script>

<template>
  <div
    class="border border-beige rounded-t-lg md:rounded-tr-none md:rounded-tl-lg shadow-lg shadow-black/70 bg-white/10"
  >
    <div class="m-4">
      <div class="text-white font-bold text-lg md:text-2xl ml-4 uppercase">
        {{ $t('about_link') }}
      </div>
      <hr class="w-1/3 border-[0.5] border-beige my-4" />
      <div class="text-md text-beige">
        <p class="mb-2">{{ $t('about_text') }}</p>
        <p>{{ $t('about_text2') }}</p>
      </div>
      <hr class="w-full sm:w-1/3 border-[0.5] border-beige my-4" />
      <!-- Links -->
      <div class="grid grid-cols-3 xl:grid-cols-5 gap-4 justify-items-center text-center">
        <a
          class="group_anim_underl flex flex-col items-center justify-center space-y-2 hover:scale-95 hover:cursor-pointer transition-all duration-300"
          :href="'https://github.com/iryonis'"
          target="_blank"
        >
          <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img
              :src="githubImage"
              class="max-w-full max-h-full object-contain hover:invert transition-all duration-500"
              alt="GitHub logo"
            />
          </div>
          <p class="text-white text-sm sm:text-base animated_underline">Github</p>
        </a>

        <PlantIcon />

        <a
          class="group_anim_underl flex flex-col items-center justify-center space-y-2 hover:scale-95 hover:cursor-pointer transition-all duration-300"
          :href="'https://www.linkedin.com/in/guilhem-bonnefous/'"
          target="_blank"
        >
          <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img
              :src="linkedinImage"
              class="max-w-full max-h-full object-contain hover:contrast-200 transition-all duration-500"
              alt="LinkedIn logo"
            />
          </div>
          <p class="text-white text-sm sm:text-base animated_underline">LinkedIn</p>
        </a>

        <SunflowerIcon />

        <div
          class="flex flex-col items-center justify-center hover:cursor-pointer space-y-2 transition-all duration-300"
        >
          <div class="w-24 h-16 sm:w-32 sm:h-24 flex items-center hover:scale-95 justify-center">
            <a href="mailto:bonnefousguilhem@gmail.com" target="_blank"
              ><img
                :src="mailImage"
                class="max-w-full max-h-full object-contain hover:contrast-150 transition-all duration-500"
                alt="Mail logo"
            /></a>
          </div>
          <button @click="copyMailToClipboard()" class="text-white text-sm sm:text-base">
            <span v-if="!isCopied" class="animated_underline active:scale-75">{{
              $t('about_copy')
            }}</span>
            <span v-else class="inline"
              >{{ $t('about_copied') }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 inline ml-1 text-green-400"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
