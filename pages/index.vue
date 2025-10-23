<script setup lang="ts">
import { CircleDollarSign, Smartphone, Truck } from "lucide-vue-next"
import CategoryCard from "~/components/card/CategoryCard.vue"
import FeatureCard from "~/components/card/FeatureCard.vue"
</script>
<template>
  <div>
    <div class="flex">
      <!-- Product Card -->
      <!-- <Card
        variant="product"
        title="HAVIT HV-G92 Gamepad"
        image="https://www.pngall.com/wp-content/uploads/4/USB-Gamepad-PNG-Image.png"
        price="$120"
        old-price="$160"
        discount="40%"
        :rating="4.5"
        :ratenum="88"
      /> -->

      <!-- Category Card -->
      <div class="grid grid-cols-3 gap-4">
        <FeatureCard
          variant="achievement"
          title="33k"
          description="Monthly Product Sale"
          :icon="CircleDollarSign"
        />

        <FeatureCard
          variant="service"
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
          :icon="Truck"
        />

        <CategoryCard
          title="Phones"
          :icon="Smartphone"
        />
      </div>

      <!-- Service Card -->
      <!-- <Card variant="service" title="FREE AND FAST DELIVERY" description="Free delivery for all orders over $140"
        icon="ri-truck-line" /> -->
    </div>
  </div>
</template>
