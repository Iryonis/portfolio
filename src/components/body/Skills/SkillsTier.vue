<script setup lang="ts">
import SkillsIcon from './SkillsIcon.vue'

const props = defineProps({
  tier: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="border border-beige shadow-lg shadow-black/70 bg-white/10">
    <div class="m-4 md:m-8">
      <div class="text-white font-bold text-lg md:text-xl my-4 uppercase">{{ $t(tier) }}</div>
      <hr class="w-1/2 border-[0.5] border-beige" />
      <div class="flex flex-row flex-wrap">
        <SkillsIcon
          v-for="(skill, index) in skills"
          :key="index"
          :src="skill.src"
          :lang="skill.lang"
          :number="skill.number"
        />
      </div>
    </div>
  </div>
</template>
