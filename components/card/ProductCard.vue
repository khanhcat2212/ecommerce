<script setup lang="ts">
import { Eye, Heart, Star } from "lucide-vue-next"
import { ref } from "vue"

type Variant = "primary" | "secondary"

const {
  title,
  image,
  price,
  oldPrice,
  discount,
  rating,
  ratenum,
  colors,
  variant,
} = defineProps({
  variant: {
    type: String as () => Variant,
    default: "primary",
  },
  title: { type: String, default: "" },
  image: { type: String, default: "" },
  price: { type: String, default: "" },
  oldPrice: { type: String, default: "" },
  discount: { type: String, default: "" },
  rating: { type: Number, default: 0 },
  ratenum: { type: Number, default: 0 },
  colors: {
    type: Array as () => string[],
    default: () => [],
  },
})

const selectedColor = ref<string | null>(null)
</script>

<template>
  <div class="group relative">
    <!-- Ảnh -->
    <div class="relative">
      <div
        class="relative rounded-sm bg-grey-100 hover:shadow-sm transition p-4 w-[16.875rem] h-[15.625rem] flex items-center justify-center"
      >
        <img
          :src="image"
          alt=""
          class="w-full h-[11.25rem] object-contain"
        />

        <span
          v-if="discount"
          class="absolute top-2.5 left-3 text-[.75rem] font-medium bg-red-500 text-white rounded-md px-3 py-1"
        >
          -{{ discount }}
        </span>

        <!-- icons -->
        <div
          class="absolute top-3 right-3 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 transition"
        >
          <button class="bg-white p-1 rounded-full shadow">
            <Heart class="text-black text-[.625rem]" />
          </button>
          <button class="bg-white p-1 rounded-full shadow">
            <Eye class="text-black text-[.625rem]" />
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

    <!-- Tiêu đề -->
    <h3 class="mt-4 text-[1rem] font-medium text-black">{{ title }}</h3>

    <div
      class="mt-2 flex items-center gap-2 flex-wrap"
      :class="{ 'justify-between': variant === 'primary' }"
    >
      <div class="flex items-center gap-2">
        <span class="text-red-500 font-semibold">{{ price }}</span>

        <span
          v-if="variant === 'primary' && oldPrice"
          class="text-grey-300 line-through text-sm"
        >
          {{ oldPrice }}
        </span>
      </div>

      <div
        v-if="variant === 'secondary' && rating"
        class="flex items-center"
      >
        <div class="flex w-[6.25rem] gap-x-1.5">
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
        <span class="ml-2 text-grey-300 text-[.875rem]">({{ ratenum }})</span>
      </div>
    </div>

    <div
      v-if="variant === 'primary' && rating"
      class="mt-2 flex items-center"
    >
      <div class="flex w-[6.25rem] gap-x-1.5">
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
      <span class="ml-2 text-grey-300 text-[.875rem]">({{ ratenum }})</span>
    </div>

    <div
      v-if="colors.length && variant === 'secondary'"
      class="mt-3 flex gap-2"
    >
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="relative w-[1.25rem] h-[1.25rem] cursor-pointer flex items-center justify-center"
        @click="selectedColor = color"
      >
        <div
          class="w-full h-full rounded-full"
          :style="{ backgroundColor: color }"
        ></div>

        <div
          v-if="selectedColor === color"
          class="absolute inset-0 rounded-full flex items-center justify-center"
        >
          <div
            class="w-full h-full rounded-full border-2 border-black flex items-center justify-center box-border"
          >
            <div
              class="w-full h-full rounded-full border-2 border-white box-border"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
