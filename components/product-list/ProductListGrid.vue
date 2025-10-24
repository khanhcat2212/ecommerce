<script setup lang="ts">
import { computed } from "vue"
import ProductCard from "@/components/card/ProductCard.vue"

const { products, row } = defineProps({
  products: {
    type: Array as () => Array<{
      title: string
      image: string
      price: string
      oldPrice?: string
      discount?: string
      rating?: number
      ratenum?: number
      colors?: string[]
    }>,
    default: () => [],
  },
  row: {
    type: Number,
    default: 1,
  },
})

const visibleProducts = computed(() => products.slice(0, row * 4))

const gridStyle = computed(() => ({
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
}))
</script>

<template>
  <div
    class="grid gap-x-12 gap-y-8 overflow-hidden py-8"
    :style="gridStyle"
  >
    <ProductCard
      v-for="(product, index) in visibleProducts"
      :key="index"
      variant="primary"
      :title="product.title"
      :image="product.image"
      :price="product.price"
      :old-price="product.oldPrice"
      :discount="product.discount"
      :rating="product.rating"
      :ratenum="product.ratenum"
      :colors="product.colors"
    />
  </div>
</template>
