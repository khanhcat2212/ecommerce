<script setup lang="ts">
import { Camera, Monitor, Smartphone } from "lucide-vue-next"
import Card from "~/components/card/Card.vue"
</script>
<template>
  <div>
    <div class="flex flex-col gap-2 w-[270px]">
      <!-- Product Card -->
      <Card
        variant="product"
        title="HAVIT HV-G92 Gamepad"
        image="https://www.pngall.com/wp-content/uploads/4/USB-Gamepad-PNG-Image.png"
        price="$120"
        old-price="$160"
        discount="40%"
        :rating="4.5"
        :ratenum="88"
      />

      <!-- Category Card -->
      <div class="grid grid-cols-3 gap-4">
        <Card
          variant="category"
          :title="'Camera'"
          :icon="Camera"
        />
        <Card
          variant="category"
          :title="'Monitor'"
          :icon="Monitor"
        />
        <Card
          variant="category"
          :title="'Smartphone'"
          :icon="Smartphone"
        />
      </div>

      <!-- Service Card -->
      <!-- <Card variant="service" title="FREE AND FAST DELIVERY" description="Free delivery for all orders over $140"
        icon="ri-truck-line" /> -->
    </div>
  </div>
</template>
