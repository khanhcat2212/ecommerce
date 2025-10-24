<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next"
import Banner from "@/components/banner/Banner.vue"
import { departments } from "~/constants/departments"
import { banners } from "~/constants/banners"
</script>

<template>
  <section class="flex bg-white mb-16">
    <!-- Sidebar -->
    <aside class="w-1/4 border-r border-gray-200">
      <ul class="mt-8">
        <li
          v-for="(item, i) in departments"
          :key="i"
          class="group flex items-center justify-between py-2 hover:bg-gray-50 cursor-pointer text-[1rem] font-medium text-gray-700 transition-colors duration-200"
        >
          <span class="group-hover:text-grey-900">{{ item.label }}</span>

          <span
            class="text-black opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200"
          >
            <ChevronRight class="w-5 h-5 text-black" />
          </span>
        </li>
      </ul>
    </aside>

    <!-- Banner -->
    <div class="w-4/5 pl-11 pt-10">
      <Banner :slides="banners" />
    </div>
  </section>
</template>
