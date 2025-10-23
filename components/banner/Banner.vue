<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"

interface Slide {
  title?: string
  subtitle?: string
  description?: string
  image: string
  logo?: string
  bgColor?: string
  textColor?: string
}

const { slides } = defineProps<{
  slides: Slide[]
}>()
</script>

<template>
  <div class="bg-white">
    <Swiper
      :modules="[Pagination, Autoplay]"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      loop
      class="rounded-sm overflow-hidden w-full h-[21.5625rem]"
    >
      <SwiperSlide
        v-for="(slide, i) in slides"
        :key="i"
      >
        <div
          class="relative flex items-center justify-between px-8 lg:px-16 h-full"
          :class="[
            slide.bgColor || 'bg-black',
            slide.textColor || 'text-white',
          ]"
        >
          <!-- left side -->
          <div class="flex flex-col justify-center space-y-4">
            <div
              v-if="slide.logo || slide.subtitle"
              class="flex items-center gap-2"
            >
              <img
                v-if="slide.logo"
                :src="slide.logo"
                alt="logo"
                class="w-[2.8125rem]"
              />
              <p
                v-if="slide.subtitle"
                class="text-sm font-light"
              >
                {{ slide.subtitle }}
              </p>
            </div>

            <h2
              v-if="slide.title"
              class="text-[3rem] py-2 font-semibold leading-[1.3]"
            >
              {{ slide.title }}
            </h2>

            <p
              v-if="slide.description"
              class="text-base max-w-[25rem]"
            >
              {{ slide.description }}
            </p>

            <button
              class="flex items-center gap-2 w-fit text-lg hover:opacity-80 transition cursor-pointer"
            >
              <span class="border-b pb-1">Shop Now</span>
              <span>→</span>
            </button>
          </div>

          <img
            :src="slide.image"
            alt="slide"
            class="w-[25rem] object-contain"
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
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin: 0 0.3125rem !important;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  background-color: #db4444;
  border: 0.125rem solid #f5f5f5;
  transform: scale(1.3);
}

.swiper-pagination {
  bottom: 1.125rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
