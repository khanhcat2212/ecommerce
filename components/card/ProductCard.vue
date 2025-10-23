<script setup lang="ts">
import { Eye, Heart, Star } from "lucide-vue-next"

const { title, image, price, oldPrice, discount, rating, ratenum } =
  defineProps({
    title: { type: String, default: "" },
    image: { type: String, default: "" },
    price: { type: String, default: "" },
    oldPrice: { type: String, default: "" },
    discount: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    ratenum: { type: Number, default: 0 },
    icon: { type: Object, default: null },
    description: { type: String, default: "" },
  })
</script>

<template>
  <div class="group relative">
    <div class="relative">
      <div
        class="relative rounded-xs bg-grey-100 hover:shadow-sm transition p-4 w-[270px] h-[250px] flex items-center justify-center"
      >
        <img
          :src="image"
          alt=""
          class="w-full h-[180px] object-contain"
        />
        <span
          v-if="discount"
          class="absolute top-2.5 left-3 text-[12px] font-medium bg-red-500 text-white rounded-md px-3 py-1"
        >
          -{{ discount }}
        </span>

        <div
          class="absolute top-3 right-3 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 transition"
        >
          <button class="bg-white p-1 rounded-full shadow">
            <Heart class="text-black text-[10px]" />
          </button>
          <button class="bg-white p-1 rounded-full shadow">
            <Eye class="text-black text-[10px]" />
          </button>
        </div>

        <div
          class="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300"
        >
          <Button
            variant="secondary"
            size="md"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>

    <h3 class="mt-4 text-[16px]] font-medium text-black">{{ title }}</h3>

    <div class="mt-2 flex items-center gap-2">
      <span class="text-red-500 font-semibold">{{ price }}</span>
      <span class="ml-2 text-grey-300 line-through text-sm">
        {{ oldPrice }}
      </span>
    </div>

    <div class="flex items-center mt-2">
      <div class="flex w-[100px] gap-x-1.5">
        <Star
          v-for="n in 5"
          :key="n"
          :class="
            n <= rating
              ? 'text-yellow-500 fill-yellow-500'
              : 'text-grey-300 fill-grey-300'
          "
          class="w-4 h-4"
        />
      </div>

      <span class="ml-2 text-grey-300 text-[14px]">({{ ratenum }})</span>
    </div>
  </div>
</template>
