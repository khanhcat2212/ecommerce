<script setup lang="ts">
import { computed } from "vue"
import ProductCard from "@/components/card/ProductCard.vue"
import type { Product } from "~/interface/product"

const { products, row } = defineProps({
  products: {
    type: Array as () => Product[],
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
    class="grid gap-x-14 gap-y-8 py-8"
    :style="gridStyle"
  >
    <ProductCard
      v-for="(product, index) in visibleProducts"
      :key="product.id || index"
      :product="product"
      variant="primary"
    />
  </div>
</template>
