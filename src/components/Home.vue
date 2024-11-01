<script setup lang="ts">
import TypeIt from 'typeit'
import Navbar from './Navbar.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

let language = locale.value
let subtitleText = ''

if (language === 'en') {
  subtitleText = "Developer and computer science student with a bachelor's degree at"
} else {
  subtitleText = "Développeur et étudiant en master d'informatique à l'"
}

const frenchText = () => {
  if (language === 'en') {
    subtitleText =
      "Développeur et étudiant en master d'informatique à l'<a id='underline' class='text-white' href='https://www.u-bordeaux.fr/'>Université de Bordeaux</a>, en France."
    language = 'wait'
    writeText('fr')
  }
}

const englishText = () => {
  if (language === 'fr') {
    subtitleText =
      "Developer and computer science student with a bachelor's degree at <a id='underline' class='text-white' href='https://www.u-bordeaux.fr/'>Université de Bordeaux</a>, France."
    language = 'wait'
    writeText('en')
  }
}

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
}
</script>

<template>
  <div class="w-72 mb-10 md:w-auto">
    <span class="block text-4xl md:text-9xl text-center text-beige font-philosopher"
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
        class="p-1 md:p-2 mr-20 text-sm md:text-base border border-b-[3px] border-b-beige/50 border-r-4 border-r-beige/50 rounded-lg border-beige text-beige hover:animate-button_shining shadow-lg shadow-black/50 active:shadow-none active:scale-90 transition-all duration-200 ease-in-out"
      >
        <img src="../assets/img/flags/uk.svg" class="size-5 md:size-6 inline mr-2" />
        {{ $t('en') }}
      </button>
      <button
        @click="frenchText"
        class="p-1 md:p-2 text-sm md:text-base border border-b-[3px] border-b-beige/50 border-r-4 border-r-beige/50 rounded-lg border-beige text-beige hover:animate-button_shining shadow-lg shadow-black/50 active:shadow-none active:scale-90 transition-all duration-200 ease-in-out"
      >
        <img src="../assets/img/flags/france.svg" class="size-5 md:size-6 inline mr-2" />
        {{ $t('fr') }}
      </button>
    </div>
  </div>
  <Navbar next="/about" />
</template>
