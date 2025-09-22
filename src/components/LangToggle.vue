<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import french_flag from '@/assets/img/flags/france_home.svg'
import uk_flag from '@/assets/img/flags/uk_home.svg'

const { locale } = useI18n()

/**
 * Computed property to determine if the current language is English
 */
const isEnglish = computed(() => locale.value === 'en')

/**
 * Switch the language between English and French
 * and save the preference in localStorage
 */
const switchLanguage = () => {
  const newLocale = locale.value === 'en' ? 'fr' : 'en'
  locale.value = newLocale
  localStorage.setItem('preferred-language', newLocale)
}
</script>

<template>
  <div class="fixed z-50 top-2 right-2 sm:top-5 sm:right-5">
    <button
      @click="switchLanguage"
      class="active:scale-90 transition-all duration-200 ease-in-out"
      :aria-label="`Switch to ${isEnglish ? 'French' : 'English'}`"
    >
      <img
        :src="isEnglish ? french_flag : uk_flag"
        :alt="`Switch to ${isEnglish ? 'French' : 'English'} language`"
        class="w-10 h-6 sm:w-12 sm:h-8 hover:opacity-90 border border-white rounded-sm"
      />
    </button>
  </div>
</template>
