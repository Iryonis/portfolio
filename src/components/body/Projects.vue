<script setup lang="ts">
import Project from './projects/Project.vue'
</script>

<template>
  <div class="m-8 md:ml-0 md:mt-16 md:col-span-4">
    <div
      class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
    >
      <Project
        v-for="project in $tm('projects')"
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
  </div>
</template>
