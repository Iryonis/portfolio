<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import LangToggle from './components/LangToggle.vue'

const route = useRoute()
</script>

<template>
  <div class="min-w-screen min-h-screen flex flex-col justify-center items-center">
    <LangToggle v-if="route.name !== 'home'" /> <RouterView />
  </div>
</template>

<style>
/* Background gradient */
/*background: linear-gradient(-45deg, #1a5276, #054a91, #102b3f, #2f2fa2); */
body {
  background: linear-gradient(-45deg, #0d1b2a, #1b263b, #102b3f, #2f2fa2);
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
.animated_underline,
.animated_underline:after,
.animated_underline:before {
  transition: all 0.5s;
}

.animated_underline {
  position: relative;
  display: inline-block;
}

.animated_underline:after {
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

.group_anim_underl:hover .animated_underline:after, /* Works on group -> may cause problems */
.animated_underline:hover:after {
  width: 100%;
}
</style>
