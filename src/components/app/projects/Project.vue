<script setup lang="ts">
import { ref } from 'vue'

const _ = defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  site: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  tool: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  access: {
    type: String,
    required: true
  }
})

const isExpanded = ref(false)

/**
 * Toggle the expansion state of the project description
 */
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <!-- Card -->
  <div class="w-full flex flex-col">
    <div class="bg-white/5 border-beige rounded border-2 shadow-lg shadow-black/50">
      <!-- If Website -->
      <a
        v-if="site && site.includes('http')"
        :href="site"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to the project website"
        aria-label="Link to the project website."
        class="flex justify-center items-center w-full bg-beige"
      >
        <img
          :src="image"
          aria-label="An image representing the project, click on it to open the project website."
          class="hover:scale-95 transition-all max-h-60 duration-500 ease-in-out"
        />
      </a>
      <!-- Else -->
      <div v-else class="flex justify-center items-center w-full bg-beige">
        <img
          :src="image"
          aria-label="An image representing the project."
          class="cursor-default max-h-60 hover:max-h-80 transition-all duration-1000 ease-in-out"
        />
      </div>

      <div class="p-4">
        <div class="justify-center py-4 flex flex-col 2xl:flex-row gap-1 text-center items-stretch">
          <span
            class="bg-gray-100 min-h-8 text-gray-800 text-xs font-medium me-2 px-2.5 py-2 rounded-lg w-full lg:w-auto flex items-center justify-center"
            title="Project type"
            >{{ type }}</span
          >
          <span
            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg w-full lg:w-auto flex items-center justify-center"
            title="Tools and languages used for the project"
            >{{ tool }}</span
          >
          <span
            class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg w-full lg:w-auto flex items-center justify-center"
            title="Language of the project"
            >{{ lang }}</span
          >
          <span
            class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg w-full lg:w-auto flex items-center justify-center"
            title="Accessibility of the project"
            >{{ access }}</span
          >
        </div>

        <div class="flex justify-between space-x-8">
          <div class="text-xl sm:text-2xl font-bold text-white">
            {{ title }}
            <hr class="w-1/2 md:border-[0.5] border-beige mt-4" />
          </div>
          <time class="font-caveat font-medium text-orange-500">{{ date }}</time>
        </div>
        <!-- Description avec système d'expansion -->
        <div class="my-4">
          <div
            :class="[
              'text-beige transition-all duration-300 ease-in-out overflow-hidden',
              isExpanded ? 'max-h-none' : 'max-h-36'
            ]"
          >
            {{ description }}
          </div>

          <!-- Bouton d'expansion -->
          <button
            @click="toggleExpand"
            class="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center"
          >
            {{ isExpanded ? $t('show_less') : $t('show_more') }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              :class="[
                'size-4 ml-1 transition-transform duration-200',
                isExpanded ? 'rotate-180' : ''
              ]"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

        <a
          v-if="github && github.includes('http')"
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white inline mr-8 animated_underline hover:animate-text_shining"
        >
          {{ $t('project_more') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
        <a
          v-if="site && site.includes('http')"
          :href="site"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white inline animated_underline hover:animate-text_shining"
        >
          {{ $t('project_site') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
