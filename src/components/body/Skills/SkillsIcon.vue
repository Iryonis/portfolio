<script setup lang="ts">
const _ = defineProps({
  src: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  projects_number: {
    type: Number,
    required: true
  },
  courses_number: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div
    class="group relative size-20 md:size-40 border border-beige bg-white/10 p-2 mt-4 mr-4 cursor-default"
  >
    <img :src="src" class="w-full h-full" />
    <div
      class="hidden group-hover:block absolute top-0 left-0 w-[200%] md:w-full md:h-full z-50 bg-black/70"
    >
      <div class="m-4 text-beige">
        <h4 class="mb-4">{{ $t('title_text_skills', { lang: lang }) }}</h4>
        <h4 class="text-sm">- {{ $t('text_one_skills', { count: projects_number }) }}</h4>
        <h4 class="text-sm">- {{ $t('text_two_skills', { count: courses_number }) }}</h4>
      </div>
    </div>
  </div>
</template>
