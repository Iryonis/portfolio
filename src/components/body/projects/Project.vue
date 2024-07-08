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
  link: {
    type: String,
    required: true
  },
  site: {
    type: String,
    required: false
  }
})
</script>

<template>
  <!-- Item #1 -->
  <div
    class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
  >
    <!-- Icon -->
    <div
      class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-beige text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 group-odd:block group-even:hidden"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 group-even:block group-odd:hidden"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
        />
      </svg>
    </div>
    <!-- Card -->
    <div
      class="flex flex-col w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border-beige rounded border-2 shadow-lg shadow-black/50"
    >
      <a
        :href="site"
        target="_blank"
        rel="noopener noreferrer"
        :title="site ? 'Link to the project site' : ''"
        :aria-label="site ? 'Link to the project site' : ''"
        class="flex justify-center items-center w-full bg-beige"
      >
        <img
          :src="'src/assets/img/' + image"
          aria-label="Project image"
          :class="{
            'hover:scale-90 transition-all duration-500 ease-in-out': site,
            'cursor-default': !site
          }"
        />
      </a>

      <div class="p-4">
        <div class="flex items-center justify-between space-x-2">
          <div class="text-xl underline font-bold text-yellow-500">{{ title }}</div>
          <time class="font-caveat font-medium text-orange-500">{{ date }}</time>
        </div>
        <div class="text-beige my-4">
          {{ description }}
        </div>
        <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white inline mr-8 hover:underline"
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
          :href="site"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white inline hover:underline"
          :class="{ hidden: !site }"
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
