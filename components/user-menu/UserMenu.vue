<script setup lang="ts">
import { ref } from "vue"
import { User } from "lucide-vue-next"
import { onClickOutside } from "@vueuse/core"
import { MenuItems } from "~/constants/menuItems"

const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

onClickOutside(menuRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div
    ref="menuRef"
    class="relative"
  >
    <button
      class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 transition"
      :class="{
        'bg-red-500 text-white': isOpen,
        'hover:bg-red-500 hover:text-white': !isOpen,
      }"
      @click="toggleMenu"
    >
      <User class="w-5 h-5" />
    </button>

    <!-- Dropdown -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-3 w-64 pl-2 pt-4 rounded-xl shadow-lg overflow-hidden bg-linear-to-b from-neutral-500/80 to-black/90 text-white backdrop-blur-md z-50"
      >
        <ul class="py-3">
          <li
            v-for="(item, i) in MenuItems"
            :key="i"
            class="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer transition"
          >
            <component
              :is="item.icon"
              class="w-6 h-6"
            />
            <span class="text-[.875rem]">{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
