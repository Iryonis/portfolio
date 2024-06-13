<script setup lang="ts">
defineProps({
  language: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav>
    <div class="grid grid-cols-5 items-center text-center">
      <RouterLink
        to="/about"
        class="text-white p-2 border border-transparent hover:border-beige rounded-l-lg"
        >{{ $t('about') }}</RouterLink
      >
      <hr class="border-beige border" />
      <RouterLink to="" class="text-white p-2 border border-transparent hover:border-beige">{{
        $t('projects')
      }}</RouterLink>
      <hr class="border-beige border" />
      <RouterLink
        to=""
        class="text-white p-2 border border-transparent hover:border-beige rounded-r-lg"
        >{{ $t('links') }}</RouterLink
      >
    </div>

    <div class="responsive z-0">
      <svg width="602" height="100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 20 Q85 10 170 20 M170 20 Q301 120 432 20 M432 20 Q517 10 602 20"
          stroke-width="1.5"
          stroke="#FFEAAE"
          fill="transparent"
          aria-hidden="true"
        />
      </svg>
      <RouterLink
        to="/about"
        class="group absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 md:p-2 text-sm md:text-base font-semibold border border-b-[3px] border-b-beige/50 border-r-4 border-r-beige/50 rounded-lg border-beige text-beige hover:bg-beige/20 shadow-lg shadow-black/50 active:shadow-none active:scale-90 transition-all duration-200 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFEAAE"
          class="group-active:translate-y-1 transition-all duration-200 ease-in-out size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
          />
        </svg>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped></style>
