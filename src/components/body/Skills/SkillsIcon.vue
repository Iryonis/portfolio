<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div
    class="group relative size-20 md:size-40 border border-beige bg-white/10 p-2 mt-4 mr-4 cursor-default"
  >
    <img :src="'src/assets/img/logo/' + src" class="w-full h-full" />
    <div class="hidden group-hover:block absolute top-0 left-0 w-full h-full z-50 bg-black/70">
      <div class="m-4 text-beige">
        <h4 class="mb-4">-> {{ lang }}{{ $t('colon') }}</h4>
        <h4 class="text-sm">{{ $t('alt_text_skills', { count: number, lang: lang }) }}</h4>
      </div>
    </div>
  </div>
</template>
