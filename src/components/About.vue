<script setup lang="ts">
import AboutText from './about/AboutText.vue'
import Skills from './about/Skills.vue'
import Career from './about/Career.vue'
</script>

<template>
  <div class="grid md:grid-cols-2 justify-center items-center">
    <div class="m-8 md:m-16"><AboutText /><Career /></div>
    <Skills />
  </div>
</template>
