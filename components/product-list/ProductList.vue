<script setup lang="ts">
import ProductCard from "../card/ProductCard.vue"

defineProps({
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
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6 text-gray-900">Best Selling Products</h2>

    <div class="flex flex-wrap gap-x-[28px] gap-y-[32px]">
      <ProductCard
        v-for="(product, index) in products"
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
  </div>
</template>
