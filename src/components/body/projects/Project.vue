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
      class="flex flex-col justify-center items-center w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white rounded border border-slate-200 shadow"
    >
      <img
        src="https://media.istockphoto.com/id/464988959/fr/photo/canard-colvert-avec-un-trac%C3%A9-de-d%C3%A9tourage.jpg?s=612x612&w=0&k=20&c=7jIz55AINALYzgbugWKu8CEjf6qRPuOZVQBmW0WQ-KA="
      />
      <div class="p-4">
        <div class="flex items-center justify-between space-x-2 mb-1">
          <div class="font-bold text-slate-900">{{ title }}</div>
          <time class="font-caveat font-medium text-indigo-500">{{ date }}</time>
        </div>
        <div class="text-slate-500">
          {{ description }}
        </div>
        <a href="" class="text-yellow-500 inline mr-8 hover:underline">
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
        <a href="" class="text-yellow-500 inline hover:underline" :class="{ hidden: !site }">
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
