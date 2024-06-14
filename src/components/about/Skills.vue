<script setup lang="ts">
import SkillsBar from './SkillsBar.vue'
</script>

<template>
  <div class="m-8 md:m-16 md:ml-4 border border-beige shadow-lg shadow-black/70 bg-white/10">
    <div class="m-4">
      <div class="text-white font-bold text-xl mb-4 uppercase">{{ $t('skills') }}</div>
      <SkillsBar text="HTML5" :value="100" />
      <SkillsBar text="CSS3" :value="20" />
      <SkillsBar text="Javascript (JS)" :value="90" />
    </div>
  </div>
</template>
