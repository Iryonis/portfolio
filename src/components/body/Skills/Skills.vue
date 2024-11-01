<script setup lang="ts">
import SkillsTier from './SkillsTier.vue'
import SkillsData from './SkillsData'
</script>

<template>
  <div
    class="border border-beige rounded-t-lg md:rounded-tl-none md:rounded-tr-lg shadow-lg shadow-black/70 bg-white/10"
  >
    <div class="m-4 md:m-8">
      <div class="text-white font-bold text-xl my-4 uppercase">{{ $t('skills') }}</div>
    </div>
  </div>
  <SkillsTier tier="tier_1" :skills="SkillsData.tier_1" />

  <SkillsTier tier="tier_2" :skills="SkillsData.tier_2" />

  <SkillsTier tier="tier_3" :skills="SkillsData.tier_3" />
</template>
