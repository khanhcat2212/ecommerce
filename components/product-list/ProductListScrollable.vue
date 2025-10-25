<script setup lang="ts">
import { ref, computed } from "vue"
import Button from "@/components/button/Button.vue"
import ProductCard from "@/components/card/ProductCard.vue"
import type { Product } from "~/interface/product"

const { products, row } = defineProps({
  products: {
    type: Array as () => Product[],
    default: () => [],
  },
  row: { type: Number, default: 1 },
})

const scrollContainer = ref<HTMLDivElement | null>(null)

const scrollByAmount = (amount = 1000) => {
  scrollContainer.value?.scrollBy({ left: amount, behavior: "smooth" })
}
const scrollLeft = () => scrollByAmount(-1000)
const scrollRight = () => scrollByAmount(1000)

defineExpose({ scrollLeft, scrollRight })

const gridStyle = computed(() => ({
  gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
}))
</script>

<template>
  <div class="py-8">
    <div
      ref="scrollContainer"
      class="grid gap-x-7 gap-y-8 overflow-x-auto scroll-smooth scrollbar-hide auto-cols-max"
      :style="gridStyle"
      style="grid-auto-flow: column"
    >
      <ProductCard
        v-for="(product, index) in products"
        :key="product.id || index"
        :product="product"
        variant="secondary"
      />
    </div>

    <div class="flex justify-center py-6">
      <Button
        variant="primary"
        size="sm"
      >
        View All Products
      </Button>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
