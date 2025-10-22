<script setup lang="ts">
import Button from "~/components/button/Button.vue"
</script>
<template>
  <div>
    <div>
      <Button
        variant="red"
        size="lg"
      >
        Create Account
      </Button>

      <Button
        variant="black"
        size="md"
        block
      >
        Add To Cart
      </Button>

      <Button
        variant="white"
        size="sm"
      >
        Move All To Bag
      </Button>

      <Button
        variant="red"
        size="sm"
      >
        View All Products
      </Button>
    </div>
  </div>
</template>
