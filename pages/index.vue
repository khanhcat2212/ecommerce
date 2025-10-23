<script setup lang="ts">
import { products } from "@/constants/products"
import ProductList from "~/components/product-list/ProductList.vue"
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <ProductList
      :products="products"
      variant="scroll"
      :row="2"
      caption="Explore Our Products"
    />

    <ProductList
      :products="products"
      variant="grid"
      :row="2"
      caption="Explore Our Products"
    />
  </div>
</template>
