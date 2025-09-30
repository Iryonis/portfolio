<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  image: {
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
  }
})

const isExpanded = ref(false)
const isImageLoaded = ref(false)
const projectRef = ref<HTMLElement>()
const shouldLoadImage = ref(false)
let observer: IntersectionObserver | null = null

/**
 * Initialize Intersection Observer to lazy load images when they enter the viewport
 */
onMounted(() => {
  if (!projectRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !shouldLoadImage.value) {
          shouldLoadImage.value = true
          // Unobserve after loading the image
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      // Load the image a bit before it enters the viewport (200 px)
      rootMargin: '200px 0px',
      threshold: 0.1
    }
  )

  observer.observe(projectRef.value)
})

onUnmounted(() => {
  if (observer && projectRef.value) {
    observer.unobserve(projectRef.value)
  }
})

/**
 * Manage the image load state to show a placeholder while loading
 */
const handleImageLoad = () => {
  isImageLoaded.value = true
}

/**
 * Toggle the expansion state of the project description
 */
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <!-- Card -->
  <div ref="projectRef" class="w-full flex flex-col">
    <div class="bg-white/5 border-beige rounded border-2 shadow-lg shadow-black/50">
      <div
        class="flex justify-center items-center max-h-80 bg-beige/5 border-b-2 border-beige overflow-hidden"
      >
        <!-- Placeholder while image loads -->
        <div
          v-show="!isImageLoaded"
          class="w-full h-60 flex items-center justify-center animate-pulse bg-beige/20"
        >
          <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path
              d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
            />
          </svg>
        </div>

        <!-- If Website -->
        <a
          v-if="site && site.includes('http') && shouldLoadImage"
          :href="site"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to the project website"
          aria-label="Link to the project website."
        >
          <img
            :src="image"
            @load="handleImageLoad"
            aria-label="'An image representing the project, click on it to open the project website.'"
            class="hover:scale-95 max-h-60 transition-all duration-500 ease-in-out"
          />
        </a>
        <!-- Else -->
        <img
          v-else-if="shouldLoadImage"
          :src="image"
          @load="handleImageLoad"
          aria-label="An image representing the project."
          class="cursor-default max-h-60 hover:max-h-80 transition-all duration-1000 ease-in-out"
        />
      </div>

      <div class="p-4">
        <div class="justify-center py-4 flex flex-col 2xl:flex-row gap-1 text-center items-stretch">
          <span
            class="bg-gray-100 min-h-8 text-gray-800 text-xs font-medium me-2 px-2.5 py-2 rounded-lg w-full lg:w-auto flex items-center justify-center"
            title="Project type"
            >{{ $t(id + '.type') }}</span
          >
          <span
            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg w-full lg:w-auto flex items-center justify-center"
            title="Tools and languages used for the project"
            >{{ $t(id + '.tool') }}</span
          >
          <span
            class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg w-full lg:w-auto flex items-center justify-center"
            title="Language of the project"
            >{{ $t(id + '.lang') }}</span
          >
          <span
            class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg w-full lg:w-auto flex items-center justify-center"
            title="Accessibility of the project"
            >{{ $t(id + '.access') }}</span
          >
        </div>

        <div class="flex justify-between space-x-8">
          <div class="text-xl sm:text-2xl font-bold text-white">
            {{ $t(id + '.title') }}
            <hr class="w-1/2 md:border-[0.5] border-beige mt-4" />
          </div>
          <time class="font-caveat font-medium text-orange-500">{{ $t(id + '.date') }}</time>
        </div>
        <!-- Description -->
        <div class="my-4">
          <div
            :class="[
              'text-beige transition-all duration-300 ease-in-out overflow-hidden',
              isExpanded ? 'max-h-none' : 'max-h-36'
            ]"
          >
            {{ $t(id + '.description') }}
          </div>

          <!-- Expand button -->
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
