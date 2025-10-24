<script setup lang="ts">
import { arrivals } from "~/constants/arrivals"
</script>

<template>
  <div class="mb-24">
    <div class="flex items-center gap-4">
      <div class="h-10 w-5 bg-red-500 rounded-sm" />
      <p class="text-4 font-semibold text-red-500">Featured</p>
    </div>

    <h2 class="mb-16 mt-4 text-[2rem] font-semibold text-black">New Arrival</h2>

    <div class="grid grid-cols-4 grid-rows-2 gap-8 h-150">
      <div
        v-for="(item, i) in arrivals"
        :key="i"
        :class="[
          'relative overflow-hidden rounded-sm group bg-black-100',
          item.size === 'large'
            ? 'col-span-2 row-span-2 p-8'
            : item.size === 'medium'
              ? 'col-span-2 row-span-1'
              : 'col-span-1 row-span-1 p-8',
        ]"
      >
        <img
          :src="item.image"
          alt=""
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div class="absolute bottom-8 left-8 text-white">
          <h3 class="text-[1.5rem] font-semibold">{{ item.title }}</h3>
          <p class="text-[.875rem] text-white max-w-62.5 pt-2">
            {{ item.subtitle }}
          </p>
          <a
            :href="item.link"
            class="inline-block mt-4 text-[1rem] text-white font-medium underline decoration-2 decoration-white hover:text-gray-300 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
