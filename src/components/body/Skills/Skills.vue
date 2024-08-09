<script setup lang="ts">
import SkillsTier from './SkillsTier.vue'
</script>

<template>
  <div class="border border-beige rounded-tr-lg shadow-lg shadow-black/70 bg-white/10">
    <div class="m-4 md:m-8">
      <div class="text-white font-bold text-xl my-4 uppercase">{{ $t('skills') }}</div>
    </div>
  </div>
  <SkillsTier
    tier="tier_1"
    :skills="[
      { src: 'html.png', lang: 'HTML5', number: 5 },
      { src: 'tailwind.svg', lang: 'Tailwind', number: 3 },
      { src: 'javascript.png', lang: 'Javascript', number: 5 },
      { src: 'vue.png', lang: 'Vue.js', number: 3 },
      { src: 'vscode.png', lang: 'Visual Studio Code', number: 3 }
    ]"
  />

  <SkillsTier
    tier="tier_2"
    :skills="[
      { src: 'c.png', lang: 'C', number: 3 },
      { src: 'ocaml.png', lang: 'OCaml', number: 2 },
      { src: 'css.svg', lang: 'CSS', number: 2 },
      { src: 'bash.svg', lang: 'Bash', number: 3 },
      { src: 'git.png', lang: 'Git', number: 2 },
      { src: 'node.svg', lang: 'Node JS', number: 2 },
      { src: 'python.png', lang: 'Python', number: 2 }
    ]"
  />

  <SkillsTier
    tier="tier_3"
    :skills="[
      { src: 'angular.png', lang: 'Angular', number: 1 },
      { src: 'parcel.svg', lang: 'Parcel', number: 1 },
      { src: 'java.png', lang: 'Java', number: 1 },
      { src: 'mongodb.png', lang: 'MongoDB', number: 1 },
      { src: 'intellijidea.png', lang: 'IntelliJ\'IDEA', number: 1 }
    ]"
  />
</template>
