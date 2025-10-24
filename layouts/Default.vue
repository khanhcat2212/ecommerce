<script setup lang="ts">
import Header from "@/components/atoms/Header.vue"
import Footer from "@/components/atoms/Footer.vue"
</script>

<template>
  <div class="flex flex-col justify-between h-screen w-screen">
    <Header />
    <div class="px-24">
      <slot />
    </div>
    <Footer />
  </div>
</template>
