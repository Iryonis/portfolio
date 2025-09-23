<script setup lang="ts">
import SkillsIcon from './SkillsIcon.vue'
import type { PropType } from 'vue'

defineProps({
  tier: {
    type: String,
    required: true
  },
  skills: {
    type: Array as PropType<Array<{ src: string; lang: string; formation: number }>>,
    required: true
  }
})
</script>

<template>
  <div
    class="border border-beige shadow-lg shadow-black/70 bg-white/10"
    :class="tier == 'tier_3' ? 'rounded-bl-lg md:rounded-bl-none md:rounded-br-lg' : 'rounded-none'"
  >
    <div class="m-2 md:m-8">
      <div class="text-white font-black font-lato text-base sm:text-lg md:text-xl uppercase">
        {{ $t(tier) }}
      </div>
      <hr class="w-full sm:w-1/2 border-[0.5] border-beige my-4" />
      <div
        class="flex flex-row flex-wrap gap-2 sm:gap-4 mx-auto sm:mx-4 justify-center sm:justify-start"
      >
        <SkillsIcon
          v-for="(skill, index) in skills"
          :key="index"
          :src="skill.src"
          :lang="skill.lang"
          :formation="skill.formation"
        />
      </div>
    </div>
  </div>
</template>
