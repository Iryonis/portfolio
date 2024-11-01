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
  <div
    class="border border-beige shadow-lg shadow-black/70 bg-white/10"
    :class="tier == 'tier_3' ? 'rounded-b-lg md:rounded-bl-none md:rounded-br-lg' : 'rounded-none'"
  >
    <div class="m-4 md:m-8">
      <div class="text-white font-black font-lato text-lg md:text-xl my-4 uppercase">
        {{ $t(tier) }}
      </div>
      <hr class="w-1/2 border-[0.5] border-beige" />
      <div class="flex flex-row flex-wrap">
        <SkillsIcon
          v-for="(skill, index) in skills"
          :key="index"
          :src="skill.src"
          :lang="skill.lang"
          :projects_number="skill.projects_number"
          :courses_number="skill.courses_number"
        />
      </div>
    </div>
  </div>
</template>
