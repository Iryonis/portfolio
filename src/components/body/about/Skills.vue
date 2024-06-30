<script setup lang="ts">
import SkillsBar from './SkillsBar.vue'
</script>

<template>
  <div class="border border-beige shadow-lg shadow-black/70 bg-white/10">
    <div class="m-4 md:m-8">
      <div class="text-white font-bold text-xl my-4 uppercase">{{ $t('skills') }}</div>
      <SkillsBar text="HTML" :value="95" />
      <SkillsBar text="CSS" :value="35" />
      <SkillsBar text="Tailwind CSS" :value="90" />
      <SkillsBar text="Javascript / Typescript" :value="85" />
      <SkillsBar text="Vue.js (+ Vite)" :value="70" />
      <SkillsBar text="Angular" :value="19" />
      <SkillsBar text="Parcel (bundler)" :value="40" />
      <SkillsBar text="Python" :value="35" />
      <SkillsBar text="Bash" :value="40" />
      <SkillsBar text="C" :value="65" />
      <SkillsBar text="OCaml" :value="45" />
      <SkillsBar text="Java" :value="19" />
      <hr class="my-8 border border-beige border-1" />
      <div class="text-white font-bold text-xl mb-4 mt-8 uppercase">{{ $t('tools') }}</div>
      <SkillsBar text="VSCode" :value="90" />
      <SkillsBar text="Git" :value="65" />
      <SkillsBar text="Node.js" :value="65" />
      <SkillsBar text="Apache (+ Maven)" :value="30" />
      <SkillsBar text="MongoDB" :value="15" />
      <SkillsBar text="IntelliJ IDEA" :value="10" />
    </div>
  </div>
</template>
