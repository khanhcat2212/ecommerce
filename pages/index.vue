<script setup lang="ts">
import { definePageMeta } from "#imports"
import HeroBanner from "~/components/sections/HeroBanner.vue"
import { categories } from "~/constants/categories"
import { products } from "~/constants/products"

definePageMeta({ layout: "default" })
</script>

<template>
  <div>
    <HeroBanner />
    <div class="border-b border-grey-100 py-12">
      <ProductList
        variant="today"
        :products="products"
        caption="Flash Sales"
        subject="Today's"
      />
    </div>

    <div class="border-b border-grey-100 py-12">
      <ProductList
        variant="category"
        :categories="categories"
        caption="Browse By Category"
        subject="Categories"
      />
    </div>

    <div class="border-b border-grey-100 py-12">
      <ProductList
        variant="grid"
        :products="products"
        caption="Best Selling Products"
        subject="This Month"
      />
    </div>

    <div class="py-12">
      <ProductList
        variant="scroll"
        :products="products"
        caption="Explore Our Products"
        subject="Our Products"
        :row="2"
      />
    </div>
  </div>
</template>
