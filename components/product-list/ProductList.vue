<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref } from "vue"
import { ArrowLeft, ArrowRight } from "lucide-vue-next"
import Button from "../button/Button.vue"
import ProductListCategory from "./ProductListCategory.vue"
import ProductListScrollable from "@/components/product-list/ProductListScrollable.vue"
import ProductListGrid from "@/components/product-list/ProductListGrid.vue"
import CountDownTimer from "@/components/sections/CountDownTimer.vue"
import type { Product } from "~/interface/product"
import { categories as defaultCategories } from "~/constants/categories"
import type { Category } from "~/interface/category"

const { variant, products, categories, row, caption } = defineProps({
  variant: {
    type: String as () => "scroll" | "grid" | "today" | "category",
    default: "grid",
  },
  products: {
    type: Array as () => Product[],
    default: () => [],
  },
  categories: {
    type: Array as () => Category[],
    default: () => [],
  },
  row: { type: Number, default: 1 },
  caption: { type: String, default: "" },
  subject: { type: String, default: "" },
})

const scrollableRef = ref<InstanceType<typeof ProductListScrollable> | null>(
  null,
)

const handleScrollLeft = () => {
  scrollableRef.value?.scrollLeft()
}

const handleScrollRight = () => {
  scrollableRef.value?.scrollRight()
}
</script>

<template>
  <div class="mt-8">
    <div
      v-if="subject.length"
      class="flex items-center gap-4"
    >
      <div class="h-10 w-5 bg-red-500 rounded-sm" />
      <p class="text-4 font-semibold text-red-500">{{ subject }}</p>
    </div>

    <div class="flex items-center justify-between mb-8 mt-4">
      <div class="flex items-end justify-between gap-30">
        <h2 class="text-[2rem] font-semibold text-black">{{ caption }}</h2>
        <CountDownTimer
          v-if="variant === 'today'"
          target-time="2025-10-28T00:00:00"
        />
      </div>

      <div
        v-if="
          variant === 'scroll' || variant === 'today' || variant === 'category'
        "
        class="flex items-center gap-3"
      >
        <button
          class="bg-grey-100 hover:bg-grey-300 hover:text-white flex items-center justify-center rounded-full w-11.5 h-11.5 text-black transition"
          @click="handleScrollLeft"
        >
          <ArrowLeft />
        </button>
        <button
          class="bg-grey-100 hover:bg-grey-300 hover:text-white flex items-center justify-center rounded-full w-11.5 h-11.5 text-black transition"
          @click="handleScrollRight"
        >
          <ArrowRight />
        </button>
      </div>

      <div v-if="variant === 'grid'">
        <Button
          variant="primary"
          size="sm"
        >
          View All
        </Button>
      </div>
    </div>

    <!-- Product list -->
    <ProductListScrollable
      v-if="variant === 'scroll' || variant === 'today'"
      ref="scrollableRef"
      :products="products"
      :row="row"
    />

    <ProductListCategory
      v-else-if="variant === 'category'"
      ref="scrollableRef"
      :categories="defaultCategories"
      :row="row"
    />

    <ProductListGrid
      v-else
      :products="products"
      :row="row"
    />
  </div>
</template>
