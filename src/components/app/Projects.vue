<script setup lang="ts">
import Project from './projects/Project.vue'
import { useI18n } from 'vue-i18n'

// Define the structure of a ProjectData object
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
