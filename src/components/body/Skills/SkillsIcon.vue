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
  formation: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="group relative size-20 md:size-40 border border-beige bg-white/10 p-2 cursor-default">
    <img :src="src" class="w-full h-full" />
    <div class="hidden group-hover:block absolute top-0 left-0 w-full h-full z-50 bg-black/70">
      <div class="m-1 sm:m-4 text-beige text-xs">
        <h4 class="underline mb-1">{{ lang }}</h4>
        <h4 v-if="formation == 0 || formation == 2">
          {{ $t('skills_auto') }}
        </h4>
        <h4 v-if="formation == 2">+ {{ $t('skills_academic') }}</h4>
        <h4 v-else-if="formation == 1 || formation == 2">{{ $t('skills_academic') }}</h4>
      </div>
    </div>
  </div>
</template>
