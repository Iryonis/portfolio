<script setup lang="ts">
import LangToggle from './app/Tools/LangToggle.vue'
import ScrollToTop from './app/Tools/ScrollToTop.vue'
</script>

<template>
  <div class="fixed z-50 right-1 sm:right-5">
    <div class="relative top-1 sm:top-5">
      <!-- Relative -> break the container if fixed too-->
      <LangToggle />
    </div>
    <!-- Fixed -> depends on the viewport -->
    <div class="fixed right-1 bottom-1 sm:bottom-5"><ScrollToTop /></div>
  </div>
</template>
