<script setup lang="ts">
import { definePageMeta } from "#imports"
import PromoBanner from "~/components/banner/PromoBanner.vue"
import FeatureCard from "~/components/card/FeatureCard.vue"
import HeroBanner from "~/components/sections/HeroBanner.vue"
import NewArrival from "~/components/sections/NewArrival.vue"
import { categories } from "~/constants/categories"
import { products } from "~/constants/products"
import { services } from "~/constants/services"

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

    <PromoBanner />

    <div class="py-12">
      <ProductList
        variant="scroll"
        :products="products"
        caption="Explore Our Products"
        subject="Our Products"
        :row="2"
      />
    </div>

    <NewArrival />

    <div class="flex items-center justify-center gap-20 pt-11 pb-12">
      <FeatureCard
        v-for="(service, index) in services"
        :key="index"
        variant="service"
        :title="service.title"
        :icon="service.icon"
        :description="service.description"
      />
    </div>
  </div>
</template>
