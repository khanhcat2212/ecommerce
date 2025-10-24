<script setup lang="ts">
import { Heart, ShoppingCart } from "lucide-vue-next"
import { useRoute, useRouter } from "vue-router"
import Input from "@/components/input/Input.vue"
import UserMenu from "@/components/user-menu/UserMenu.vue"
import { navLinks } from "~/constants/navLinks"

const route = useRoute()
const router = useRouter()

const goTo = (path: string) => {
  router.push(path)
}

const isActive = (path: string) => {
  return route.path === path
}
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
        <h1 class="text-[1.5rem] font-bold">Exclusive</h1>

        <nav class="flex gap-8 text-black text-[1rem] font-normal">
          <button
            v-for="(link, index) in navLinks"
            :key="index"
            class="relative text-[16px] font-normal text-black transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-grey-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            @click="goTo(link.path)"
          >
            {{ link.label }}
            <!-- underline when active -->
            <span
              v-if="isActive(link.path)"
              class="absolute left-0 -bottom-1 w-full h-[1.5px] bg-grey-300"
            ></span>
          </button>
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

          <Heart class="w-6 h-6 ml-2 cursor-pointer" />

          <ShoppingCart class="w-6 h-6 ml-1 cursor-pointer" />

          <UserMenu />
        </div>
      </div>
    </div>
  </header>
</template>
