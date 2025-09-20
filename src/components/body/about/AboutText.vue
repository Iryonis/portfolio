<script setup lang="ts">
const baseURL = import.meta.env.BASE_URL
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
      <hr class="w-1/3 border-[0.5] border-beige my-4" />
      <div class="grid grid-cols-3 xl:grid-cols-5 gap-4 justify-items-center text-center">
        <a
          class="group_anim_underl flex flex-col items-center justify-center space-y-2 hover:scale-95 hover:cursor-pointer transition-all duration-300"
          :href="'https://github.com/iryonis'"
          target="_blank"
        >
          <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img
              :src="`${baseURL}img/logo/github.svg`"
              class="max-w-full max-h-full object-contain hover:invert transition-all duration-500"
              alt="GitHub logo"
            />
          </div>
          <p class="text-white text-sm sm:text-base animated_underline">Github</p>
        </a>
        <svg class="h-52 w-20 hidden xl:inline-block" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 20 50 Q 50 82 35 114"
            stroke="#FFEAAE"
            stroke-width="2"
            fill="none"
            aria-hidden="true"
          />
          <path
            d="M 35 114 Q 10 146 60 178"
            stroke="#FFEAAE"
            stroke-width="2"
            fill="none"
            aria-hidden="true"
          />

          <path
            d="M 20 50 Q 5 40 15 4"
            stroke="#FFEAAE"
            stroke-width="2"
            fill="none"
            opacity="0.7"
            aria-hidden="true"
          />
          <path
            d="M 20 50 Q 35 30 15 4"
            stroke="#FFEAAE"
            stroke-width="2"
            fill="#FFEAAE"
            opacity="0.7"
            aria-hidden="true"
          />
        </svg>
        <a
          class="group_anim_underl flex flex-col items-center justify-center space-y-2 hover:scale-95 hover:cursor-pointer transition-all duration-300"
          :href="'https://www.linkedin.com/in/guilhem-bonnefous/'"
          target="_blank"
        >
          <div class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img
              :src="`${baseURL}img/logo/linkedin.webp`"
              class="max-w-full max-h-full object-contain hover:contrast-200 transition-all duration-500"
              alt="LinkedIn logo"
            />
          </div>
          <p class="text-white text-sm sm:text-base animated_underline">LinkedIn</p>
        </a>
        <!-- Sun flower -->
        <svg
          class="h-52 w-20 hidden xl:inline-block"
          preserveAspectRatio="xMinYMin meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Stem -->
          <path
            d="M 50 50 Q 10 82 35 114"
            stroke="#FFEAAE"
            stroke-width="2"
            fill="none"
            aria-hidden="true"
          />
          <path
            d="M 35 114 Q 50 146 20 178"
            stroke="#FFEAAE"
            stroke-width="2"
            fill="none"
            aria-hidden="true"
          />

          <!-- Main rays -->
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="30"
            stroke="#FFEAAE"
            stroke-width="2"
            opacity="0.8"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="64"
            y2="36"
            stroke="#FFEAAE"
            stroke-width="2"
            opacity="0.8"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="70"
            y2="50"
            stroke="#FFEAAE"
            stroke-width="2"
            opacity="0.8"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="64"
            y2="64"
            stroke="#FFEAAE"
            stroke-width="2"
            opacity="0.8"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="70"
            stroke="#FFEAAE"
            stroke-width="2"
            opacity="0.8"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="30"
            y2="50"
            stroke="#FFEAAE"
            stroke-width="2"
            opacity="0.8"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="36"
            y2="36"
            stroke="#FFEAAE"
            stroke-width="2"
            opacity="0.8"
            aria-hidden="true"
          />

          <!-- Diagonal rays -->
          <line
            x1="50"
            y1="50"
            x2="57"
            y2="36"
            stroke="#FFEAAE"
            stroke-width="1.5"
            opacity="0.6"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="64"
            y2="43"
            stroke="#FFEAAE"
            stroke-width="1.5"
            opacity="0.6"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="64"
            y2="57"
            stroke="#FFEAAE"
            stroke-width="1.5"
            opacity="0.6"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="57"
            y2="64"
            stroke="#FFEAAE"
            stroke-width="1.5"
            opacity="0.6"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="36"
            y2="57"
            stroke="#FFEAAE"
            stroke-width="1.5"
            opacity="0.6"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="36"
            y2="43"
            stroke="#FFEAAE"
            stroke-width="1.5"
            opacity="0.6"
            aria-hidden="true"
          />
          <line
            x1="50"
            y1="50"
            x2="43"
            y2="36"
            stroke="#FFEAAE"
            stroke-width="1.5"
            opacity="0.6"
            aria-hidden="true"
          />

          <!-- Center -->
          <circle cx="50" cy="50" r="4" fill="white" aria-hidden="true" />
        </svg>
        <!-- End of Sun flower -->

        <a
          class="group_anim_underl flex flex-col items-center justify-center space-y-2 hover:scale-95 hover:cursor-pointer transition-all duration-300"
          :href="'mailto:bonnefousguilhem@gmail.com'"
          target="_blank"
        >
          <div class="w-28 h-20 sm:w-32 sm:h-24 flex items-center justify-center">
            <img
              :src="`${baseURL}img/logo/gmail.webp`"
              class="max-w-full max-h-full object-contain hover:contrast-150 transition-all duration-500"
              alt="Mail logo"
            />
          </div>
          <p class="text-white text-sm sm:text-base animated_underline">
            bonnefousguilhem @gmail.com
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
