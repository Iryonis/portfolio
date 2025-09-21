<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import NextButton from './NextButton.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * Check if the current route is the about page to display (or not) the next button
 */
const isAboutPage = () => {
  return route.name === 'about'
}
</script>

<template>
  <div class="w-full grid md:grid-cols-5 justify-center">
    <div class="block m-8 mt-16 md:hidden"><Navbar next="/projects" /></div>
    <div class="hidden md:block md:col-span-1"><Sidebar /></div>
    <RouterView />
  </div>
  <div class="mb-24"><NextButton v-if="isAboutPage()" destination="/projects" /></div>
</template>
