<script setup lang="ts">
import { ArrowLeft, ArrowRight } from "lucide-vue-next"
import ProductListScrollable from "./ProductListScrollable.vue"

interface Product {
  title: string
  image: string
  price: string
  oldPrice?: string
  discount?: string
  rating?: number
  ratenum?: number
  colors?: string[]
}

const { variant, products, row, caption } = defineProps({
  variant: {
    type: String as () => "scroll" | "grid",
    default: "grid",
  },
  products: {
    type: Array as () => Product[],
    default: () => [],
  },
  row: {
    type: Number,
    default: 1,
  },
  caption: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-14">
      <h2 class="text-[2.25rem] font-semibold text-black">{{ caption }}</h2>

      <div
        v-if="variant === 'scroll'"
        class="flex items-center gap-3"
      >
        <button
          id="scroll-left"
          class="bg-grey-100 hover:bg-gray-100 rounded-full p-2 text-gray-700 transition"
        >
          <ArrowLeft />
        </button>
        <button
          id="scroll-right"
          class="bg-grey-100 hover:bg-gray-100 rounded-full p-2 text-gray-700 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>

    <!-- Product list -->
    <ProductListScrollable
      v-if="variant === 'scroll'"
      :products="products"
      :row="row"
    />

    <ProductListGrid
      v-else
      :products="products"
      :row="row"
    />
  </div>
</template>
