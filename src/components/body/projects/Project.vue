<script setup lang="ts">
const props = defineProps({
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
        title="Link to the project site"
        aria-label="Link to the project site"
        class="flex justify-center items-center w-full bg-beige"
      >
        <img
          :src="'src/assets/img/projects/' + image"
          aria-label="Project image"
          class="hover:scale-95 transition-all duration-500 ease-in-out"
        />
      </a>
      <!-- Else -->
      <div v-else class="flex justify-center items-center w-full bg-beige">
        <img
          :src="'src/assets/img/projects/' + image"
          aria-label="Project image"
          class="cursor-default"
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

        <div class="flex justify-between space-x-2">
          <div class="text-2xl font-bold text-white">
            {{ title }}
            <hr class="w-1/2 md:border-[0.5] border-beige mt-4" />
          </div>
          <time class="font-caveat font-medium text-orange-500">{{ date }}</time>
        </div>
        <div class="text-beige my-4">
          {{ description }}
        </div>

        <a
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
