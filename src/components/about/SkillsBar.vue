<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="text-md text-beige">
    <p class="font-semibold mb-1 mt-2">{{ text }}</p>
    <div class="w-full border border-white rounded-lg">
      <div class="text-right bg-green-700 rounded-lg" :style="{ width: value + '%' }">
        <span class="mr-4">{{ value }}%</span>
      </div>
    </div>
  </div>
</template>
