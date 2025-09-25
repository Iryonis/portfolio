<script setup lang="ts">
import Project from './projects/Project.vue'
import { projectsData } from './projects/ProjectsData'

const projects = projectsData
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-7 md:col-span-4 sm:mt-16 m-4 sm:mr-20">
    <div
      class="border sm:col-span-2 md:col-span-3 border-beige rounded-t-full shadow-lg shadow-black/70 bg-white/5"
    >
      <div class="m-4 md:m-8">
        <div class="text-white font-semibold text-3xl my-4 uppercase text-center">
          {{ $t('project_title') }}
        </div>
      </div>
    </div>
    <Project
      v-for="project in projects"
      :id="project.id"
      :image="project.image"
      :github="project.github"
      :site="project.site"
    />
  </div>
</template>
