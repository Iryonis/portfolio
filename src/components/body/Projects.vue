<script setup lang="ts">
import Project from './projects/Project.vue'
</script>

<template>
  <div class="m-8 md:ml-0 md:mt-16 md:col-span-4">
    <!-- Top arrow -->
    <div class="relative">
      <div class="absolute -top-5 left-5 md:left-1/2 transform -translate-x-1/2 z-10">
        <p class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="size-8 text-slate-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </p>
      </div>

      <div
        class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-300 before:via-slate-300 before:to-transparent"
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
  </div>
</template>
