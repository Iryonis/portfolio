<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
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

const { t: $t } = useI18n()

/**
 * Computed property to get the formation type display text based on the formation prop
 */
const formationDisplay = computed(() => {
  const auto = $t('skills_auto')
  const academic = $t('skills_academic')

  switch (props.formation) {
    case 0:
      return auto
    case 1:
      return academic
    case 2:
      return `${auto} + ${academic}`
    default:
      return ''
  }
})
</script>

<template>
  <div class="group relative size-20 md:size-40 border border-beige bg-white/10 p-2 cursor-default">
    <img
      :src="src"
      alt="The logo of {{ lang }}. When hovered (or clicked on mobile), it shows the formation type."
      class="w-full h-full"
    />
    <div class="hidden group-hover:block absolute top-0 left-0 w-full h-full z-50 bg-black/70">
      <div class="m-1 sm:m-4 text-beige text-xs sm:text-sm">
        <h4 class="underline mb-1 sm:mb-4 sm:text-base font-semibold">{{ lang }}</h4>
        <h4 class="select-none md:select-text">{{ formationDisplay }}</h4>
      </div>
    </div>
  </div>
</template>
