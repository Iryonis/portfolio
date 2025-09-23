<script setup lang="ts">
import TypeIt from 'typeit'
import Navbar from './Navbar.vue'
import NextButton from './NextButton.vue'
import { useI18n } from 'vue-i18n'
import french_flag from '@/assets/img/flags/france.svg'
import uk_flag from '@/assets/img/flags/uk.svg'

const { locale } = useI18n()

let language = locale.value
let subtitleText = ''

if (language === 'en') {
  subtitleText = "Full-stack developer and Software Engineering master's student at"
} else {
  subtitleText = "Développeur fullstack et étudiant en master Génie Logiciel à l'"
}

/**
 * Change the subtitle text to French with a typing effect
 */
const frenchText = () => {
  if (language === 'en') {
    subtitleText =
      "Développeur fullstack et étudiant en master Génie Logiciel à l'<a id='underline' class='text-white' href='https://www.u-bordeaux.fr/'>Université de Bordeaux</a>, en France."
    language = 'wait'
    writeText('fr')
  }
}

/**
 * Change the subtitle text to English with a typing effect
 */
const englishText = () => {
  if (language === 'fr') {
    subtitleText =
      "Full-stack developer and Software Engineering master's student at <a id='underline' class='text-white' href='https://www.u-bordeaux.fr/'>Université de Bordeaux</a>, France."
    language = 'wait'
    writeText('en')
  }
}

/**
 * Write the subtitle text with a typing effect
 * @param lang The language to switch to ('en' or 'fr')
 */
const writeText = (lang: string) => {
  new TypeIt('#subtitle', {
    strings: subtitleText,
    startDelete: true,
    speed: 20,
    afterComplete: async (instance: TypeIt) => {
      language = lang
      instance.destroy()
    }
  }).go()

  // Change the language of the website for i18n
  locale.value = lang
  localStorage.setItem('preferred-language', lang)
}
</script>

<template>
  <div class="w-72 mb-10 sm:w-auto">
    <span class="block text-5xl sm:text-7xl md:text-9xl text-center text-beige font-philosopher"
      >Guilhem <br />
      BONNEFOUS</span
    >
    <hr class="block w-full border border-beige my-8" />
    <div class="text-center text-beige text-sm md:text-base" id="subtitle">
      {{ subtitleText }}
      <a
        class="text-white animated_underline"
        href="https://www.u-bordeaux.fr/"
        target="_blank"
        rel="noopener noreferrer"
        >Université de Bordeaux</a
      >, France.
    </div>
    <div class="flex justify-center mt-8">
      <button
        @click="englishText"
        class="p-1 md:p-2 mr-20 text-sm md:text-base border border-b-[3px] border-b-beige/50 border-r-4 border-r-beige/50 rounded-lg border-beige text-beige md:hover:animate-button_shining shadow-lg shadow-black/50 active:shadow-none active:scale-90 transition-all duration-200 ease-in-out"
      >
        <img
          :src="uk_flag"
          alt="The UK flag. Click on it to change the language to English. If it is already in English, nothing happens."
          class="size-5 md:size-6 inline mr-2"
        />
        {{ $t('en') }}
      </button>
      <button
        @click="frenchText"
        class="p-1 md:p-2 text-sm md:text-base border border-b-[3px] border-b-beige/50 border-r-4 border-r-beige/50 rounded-lg border-beige text-beige md:hover:animate-button_shining shadow-lg shadow-black/50 active:shadow-none active:scale-90 transition-all duration-200 ease-in-out"
      >
        <img
          :src="french_flag"
          alt="The French flag. Click on it to change the language to French. If it is already in French, nothing happens."
          class="size-5 md:size-6 h-full inline mr-2"
        />
        {{ $t('fr') }}
      </button>
    </div>
  </div>
  <Navbar />
  <NextButton destination="/app/about" />
</template>
