<!-- eslint-disable check-file/filename-naming-convention -->
<script setup lang="ts">
import Header from "@/components/atoms/Header.vue"
import Footer from "@/components/atoms/Footer.vue"
import Breadcum from "~/components/breadcum/Breadcum.vue"
</script>

<template>
  <div class="flex flex-col justify-between h-screen w-screen">
    <Header />
    <div class="px-24 py-20">
      <Breadcum />
      <slot />
    </div>
    <Footer />
  </div>
</template>
