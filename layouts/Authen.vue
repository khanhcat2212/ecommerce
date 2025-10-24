<script setup lang="ts">
import Header from "@/components/atoms/Header.vue"
import Footer from "@/components/atoms/Footer.vue"
</script>

<template>
  <div class="flex flex-col justify-between h-screen w-screen">
    <Header />
    <div class="pt-16 pb-12 flex items-center">
      <div class="w-3/5 rounded-sm overflow-hidden">
        <img
          src="https://lifelinemedicalsupply.net/static/media/authimg.3e68db7c28df1d985f02.png"
          alt="authen"
        />
      </div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
