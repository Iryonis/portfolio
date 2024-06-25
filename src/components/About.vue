<script setup lang="ts">
import AboutText from './about/AboutText.vue'
import Skills from './about/Skills.vue'
import Career from './about/Career.vue'
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
</script>

<template>
  <div class="grid md:grid-cols-5 justify-center">
    <div class="block m-8 mt-16 md:hidden"><Navbar next="/projects" /></div>
    <div class="hidden md:block md:col-span-1"><Sidebar /></div>
    <div class="m-8 mb-4 md:ml-0 md:mt-16 md:col-span-2"><AboutText /><Career /></div>
    <div class="m-8 mt-0 md:m-16 md:ml-4 md:col-span-2"><Skills /></div>
  </div>
</template>
