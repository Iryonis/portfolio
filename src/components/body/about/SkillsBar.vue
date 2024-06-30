<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})

const value = props.value
const barText = ref('')
const color = ref('')

if (value >= 90) {
  barText.value = 'master'
  color.value = 'rgb(21 128 61)'
} else if (value >= 60) {
  barText.value = 'advanced'
  color.value = 'rgb(77 124 15)'
} else if (value >= 40) {
  barText.value = 'intermediate'
  color.value = 'rgb(202 138 4)'
} else if (value >= 20) {
  barText.value = 'beginner'
  color.value = 'rgb(234 88 12)'
} else {
  barText.value = 'novice'
  color.value = 'rgb(185 28 28)'
}
</script>

<template>
  <div class="text-md text-white">
    <p class="font-semibold mb-1 mt-2">{{ text }}</p>
    <div class="w-full border border-white rounded-lg">
      <div
        class="text-right bg-green-700 rounded-l-lg"
        :style="{ width: value + '%', 'background-color': color }"
      >
        <span class="mx-2">{{ $t(barText) }}</span>
      </div>
    </div>
  </div>
</template>
