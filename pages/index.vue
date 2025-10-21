<script setup lang="ts">
import List from "~/components/organisms/List.vue"
import Header from "~/components/atoms/Header.vue"
</script>
<template>
  <div class="text-[red]">
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 class="text-4xl font-bold text-[#50d71e] underline">
        Hello Tailwind + Nuxt!
      </h1>
      <div class="text-red-100">Hello</div>
    </div>

    <Header />
    <List />
  </div>
</template>
