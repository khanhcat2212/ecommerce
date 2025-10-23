<script setup lang="ts">
import Banner from "@/components/banner/Banner.vue"

const slides = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uPEvaHJ3SDT_Qp73SqM-Yg512aKoHdadsQ&s",
    subtitle: "iPhone 14 Series",
    title: "Up to 10%\noff Voucher",
    image:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Save up to 15%",
    image:
      "https://img.freepik.com/premium-photo/close-up-toy-car-against-black-background_1048944-9337078.jpg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
]
</script>

<template>
  <div class="w-[850px]">
    <Banner :slides="slides" />
  </div>
</template>
