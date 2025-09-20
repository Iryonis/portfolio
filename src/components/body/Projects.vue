<script setup lang="ts">
import Project from './projects/Project.vue'
import { useI18n } from 'vue-i18n'

// Définir l'interface pour un projet
interface ProjectData {
  title: string
  date: string
  image: string
  description: string
  github: string
  site?: string
  type: string
  tool: string
  lang: string
  access: string
}

const { tm } = useI18n()
const projects = tm('projects') as ProjectData[]
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-7 md:col-span-4 mt-16 mr-20">
    <Project
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :date="project.date"
      :image="project.image"
      :description="project.description"
      :github="project.github"
      :site="project.site"
      :type="project.type"
      :tool="project.tool"
      :lang="project.lang"
      :access="project.access"
    />
  </div>
</template>
