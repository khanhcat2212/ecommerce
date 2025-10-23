<script setup lang="ts">
import { Heart, ShoppingCart, User } from "lucide-vue-next"
import Input from "../input/Input.vue"
</script>

<template>
  <header class="w-full border-b border-gray-200">
    <div
      class="bg-black text-white text-sm h-12 flex items-center justify-center"
    >
      <p class="text-white text-[.875rem] text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a
          href="#"
          class="font-semibold underline decoration-white underline-offset-2 ml-1"
        >
          ShopNow
        </a>
      </p>
    </div>

    <div class="bg-white h-24">
      <div
        class="max-w-7xl mx-auto flex justify-between items-baseline py-4 px-4 pt-9"
      >
        <h1 class="text-[24px] font-bold">Exclusive</h1>

        <nav class="flex gap-8 text-grey-700 text-[1rem] font-normal">
          <a
            href="#"
            class="hover:text-grey-300"
          >
            Home
          </a>
          <a
            href="#"
            class="hover:text-grey-300"
          >
            Contact
          </a>
          <a
            href="#"
            class="hover:text-grey-300"
          >
            About
          </a>
          <a
            href="#"
            class="hover:text-grey-300"
          >
            Sign Up
          </a>
        </nav>

        <!-- Search box -->
        <div class="flex gap-4 items-center">
          <div class="relative w-60.75">
            <Input
              variant="search"
              icon="search"
              placeholder="What are you looking for?"
            />
          </div>

          <Heart class="w-6 h-6 ml-2" />

          <ShoppingCart class="w-6 h-6 ml-1" />

          <User class="w-6 h-6 ml-1" />
        </div>
      </div>
    </div>
  </header>
</template>

<style>
nav a {
  position: relative;
  transition: color 0.2s;
}

nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.25rem;
  width: 0;
  height: 0.125rem;
  background-color: #999;
  transition: width 0.2s;
}

nav a:hover::after {
  width: 100%;
}
</style>
