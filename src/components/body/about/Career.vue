<script setup lang="ts"></script>

<template>
  <div
    class="border rounded-b-lg md:rounded-br-none md:rounded-bl-lg border-beige shadow-lg shadow-black/70 bg-white/10"
  >
    <div class="m-4">
      <div class="text-white font-bold text-lg md:text-2xl ml-4 uppercase">{{ $t('career') }}</div>
      <hr class="w-1/3 border-[0.5] border-beige my-4" />
      <ul class="text-md text-beige">
        <li class="my-4">
          <span class="font-semibold text-xl underline decoration-1 underline-offset-4">2021</span>
          <ul class="list-disc pl-8">
            <li>
              {{ $t('2021.1')
              }}<a
                class="text-white animated_underline"
                href="https://www.u-bordeaux.fr/"
                target="_blank"
                rel="noopener noreferrer"
                >Université de Bordeaux</a
              >
            </li>
            <li>{{ $t('2021.2') }}</li>
            <li>{{ $t('2021.3') }}</li>
          </ul>
        </li>
        <li class="my-4">
          <span class="font-semibold text-xl underline decoration-1 underline-offset-4">2022</span>
          <ul class="list-disc pl-8">
            <li>{{ $t('2022.1') }}</li>
            <li>
              {{ $t('2022.2') }}
              <a
                class="text-white animated_underline"
                href="https://www.labri.fr/presentation/le-mot-du-directeur"
                title="Laboratoire Bordelais de Recherche en Informatique"
                target="_blank"
                rel="noopener noreferrer"
                >LaBRI</a
              >
            </li>
            <li>
              {{ $t('2022.3') }}'<a
                class="text-white animated_underline"
                href="https://adventofcode.com/2022/about"
                target="_blank"
                rel="noopener noreferrer"
                >Advent of Code</a
              >'
            </li>
          </ul>
        </li>
        <li class="my-4">
          <span class="font-semibold text-xl underline decoration-1 underline-offset-4">2023</span>
          <ul class="list-disc pl-8">
            <li>{{ $t('2023.1') }}</li>
            <li>{{ $t('2023.2') }}</li>
            <li>
              {{ $t('2023.3')
              }}<a
                class="text-white animated_underline"
                href="https://www.nuitdelinfo.com/"
                target="_blank"
                rel="noopener noreferrer"
                >Nuit de l'Info</a
              >
              2023
            </li>
          </ul>
        </li>
        <li class="my-4">
          <span class="font-semibold text-xl underline decoration-1 underline-offset-4">2024</span>
          <ul class="list-disc pl-8">
            <li>{{ $t('2024.1') }}</li>
            <li>
              {{ $t('2024.2')
              }}<a
                class="text-white animated_underline"
                href="https://www.nuitdelinfo.com/"
                target="_blank"
                rel="noopener noreferrer"
                >Nuit de l'Info</a
              >
              2024
            </li>

            <li>{{ $t('2024.3') }}</li>
            <li>{{ $t('2024.4') }}</li>
          </ul>
        </li>
        <li class="my-4">
          <span class="font-semibold text-xl underline decoration-1 underline-offset-4">2025</span>
          <ul class="list-disc pl-8">
            <li>{{ $t('2025.1') }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
