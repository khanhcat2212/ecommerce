<script setup lang="ts">
import { computed } from "vue"

type Variant = "primary" | "secondary" | "thirdary"

const { variant, size, block } = defineProps({
  variant: {
    type: String as () => Variant,
    default: "primary",
  },
  size: {
    type: String as () => "sm" | "md" | "lg",
    default: "md",
  },
  block: {
    type: Boolean,
    default: false,
  },
})

const basePadding = computed(() => {
  switch (size) {
    case "sm":
      return "px-[3rem] py-[1rem]"
    case "md":
      return "px-[5.4375rem] py-[.5rem]"
    case "lg":
      return "px-[7.625rem] py-[1rem]"
    default:
      return variant === "secondary"
        ? "px-3 py-1.5 text-sm"
        : "px-5 py-2.5 text-base"
  }
})

const variantClasses = computed(() => {
  switch (variant) {
    case "secondary":
      return "bg-black text-white text-[1rem] hover:bg-gray-900 cursor-pointer"
    case "thirdary":
      return "bg-white text-black text-[1rem] border border-grey-900 hover:bg-white-500 cursor-pointer"
    default: // primary
      return "rounded-sm bg-red-500 text-white text-[1rem] hover:bg-red-400 cursor-pointer"
  }
})
</script>

<template>
  <button
    :class="[
      'overflow-hidden font-medium transition-colors duration-200 text-[1rem]',
      basePadding,
      variantClasses,
      block && 'w-full',
    ]"
  >
    <slot />
  </button>
</template>
