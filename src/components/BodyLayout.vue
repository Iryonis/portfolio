<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
</script>

<template>
  <div class="w-full grid md:grid-cols-5 justify-center">
    <div class="block m-8 mt-16 md:hidden"><Navbar next="/projects" /></div>
    <div class="hidden md:block md:col-span-1"><Sidebar /></div>
    <RouterView />
  </div>
</template>
