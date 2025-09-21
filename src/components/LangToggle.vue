<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import french_flag from '@/assets/img/flags/france_home.svg'
import uk_flag from '@/assets/img/flags/uk_home.svg'

const { locale } = useI18n()

const isChecked = locale.value === 'en' ? ref(true) : ref(false)

const changeLang = () => {
  isChecked.value = !isChecked.value
  locale.value = isChecked.value ? 'en' : 'fr'
}
</script>

<template>
  <div class="fixed z-50 top-2 right-2 sm:top-5 sm:right-5">
    <button @click="changeLang" class="active:scale-90 transition-all duration-200 ease-in-out">
      <img
        :src="isChecked ? uk_flag : french_flag"
        class="w-10 h-6 sm:w-12 sm:h-8 hover:opacity-90 border border-white"
      />
    </button>
  </div>
</template>
