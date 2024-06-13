<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import LangToggle from './components/LangToggle.vue'

const route = useRoute()
</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <LangToggle :class="{ hidden: route.name === 'home' }" /> <RouterView />
  </div>
</template>

<style>
/* Background gradient */
body {
  background: linear-gradient(-45deg, #1a5276, #054a91, #102b3f, #2f2fa2);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Style for the underline effect */
#underline,
#underline:after,
#underline:before {
  transition: all 0.5s;
}

#underline {
  position: relative;
  display: inline-block;
}

#underline:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: rgb(255, 255, 255);
  height: 1px;
}

#underline:hover:after {
  width: 100%;
}
</style>
