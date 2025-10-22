<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"
</script>

<template>
  <div class="bg-white">
    <Swiper
      :modules="[Pagination, Autoplay]"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      loop
      class="rounded-sm overflow-hidden w-full h-[345px]"
    >
      <!-- Slide 1 -->
      <SwiperSlide>
        <div
          class="relative bg-black text-white flex items-center justify-between px-8 lg:px-16 h-full"
        >
          <div class="flex flex-col justify-center space-y-4">
            <div class="flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uPEvaHJ3SDT_Qp73SqM-Yg512aKoHdadsQ&s"
                alt="Apple Logo"
                class="w-[45px]"
              />
              <p class="text-sm font-light">iPhone 14 Series</p>
            </div>

            <h2 class="text-[48px] py-2 font-semibold leading-[1.3]">
              Up to 10%
              <br />
              off Voucher
            </h2>

            <button
              class="flex items-center gap-2 w-fit text-lg hover:opacity-80 transition cursor-pointer"
            >
              <span class="border-b border-white pb-1">Shop Now</span>
              <span>→</span>
            </button>
          </div>

          <img
            src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg"
            alt="iPhone 14"
            class="w-[400px] object-contain"
          />
        </div>
      </SwiperSlide>

      <!-- Slide 2 -->
      <SwiperSlide>
        <div
          class="relative bg-black text-white flex items-center justify-between px-8 lg:px-16 h-full"
        >
          <div class="flex flex-col justify-center space-y-4">
            <h2 class="text-[48px] font-semibold leading-[1.1]">
              Save up to 15%
            </h2>

            <button
              class="flex items-center gap-2 w-fit text-lg hover:opacity-80 transition cursor-pointer"
            >
              <span class="border-b border-white pb-1">Shop Now</span>
              <span>→</span>
            </button>
          </div>

          <img
            src="https://img.freepik.com/premium-photo/close-up-toy-car-against-black-background_1048944-9337078.jpg"
            alt="MacBook"
            class="w-[420px] object-contain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet {
  background-color: #808080;
  opacity: 1;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 5px !important;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  background-color: #db4444;
  border: 2px solid #f5f5f5;
  transform: scale(1.3);
}

.swiper-pagination {
  bottom: 18px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
