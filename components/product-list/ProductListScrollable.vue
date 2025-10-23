<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import ProductCard from "../card/ProductCard.vue"

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

const scrollContainer = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const leftBtn = document.getElementById("scroll-left")
  const rightBtn = document.getElementById("scroll-right")

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      scrollContainer.value?.scrollBy({ left: -1000, behavior: "smooth" })
    })
    rightBtn.addEventListener("click", () => {
      scrollContainer.value?.scrollBy({ left: 1000, behavior: "smooth" })
    })
  }
})

const gridStyle = computed(() => ({
  gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
}))
</script>

<template>
  <div>
    <div
      ref="scrollContainer"
      class="grid gap-x-7 gap-y-8 overflow-x-auto scroll-smooth scrollbar-hide auto-cols-max"
      :style="gridStyle"
      style="grid-auto-flow: column"
    >
      <ProductCard
        v-for="(product, i) in products"
        :key="i"
        variant="secondary"
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

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
