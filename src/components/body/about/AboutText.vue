<script setup lang="ts"></script>

<template>
  <div
    class="border border-beige rounded-t-lg md:rounded-tr-none md:rounded-tl-lg shadow-lg shadow-black/70 bg-white/10"
  >
    <div class="m-4">
      <div class="text-white font-bold text-lg md:text-xl ml-4 uppercase">
        {{ $t('about_link') }}
      </div>
      <hr class="w-1/3 border-[0.5] border-beige my-4" />
      <div class="text-md text-beige">
        <p class="mb-2">{{ $t('about_text') }}</p>
        <p>{{ $t('about_text2') }}</p>
      </div>
    </div>
  </div>
</template>
