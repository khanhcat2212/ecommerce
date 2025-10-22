<script setup lang="ts">
import { computed } from "vue"

const props = defineProps({
  variant: {
    type: String,
    default: "red", // 'red' | 'black' | 'white'
  },
  size: {
    type: String,
    default: "md", // 'sm' | 'md' | 'lg'
  },
  block: {
    type: Boolean,
    default: false, // true = full width
  },
})

const basePadding = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-[48px] py-[16px]"
    case "md":
      return "px-[87px] py-[8px]"
    case "lg":
      return "px-[122px] py-[16px]"
    default:
      return props.variant === "black"
        ? "px-3 py-1.5 text-sm"
        : "px-5 py-2.5 text-base"
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case "black":
      return "bg-black text-white hover:bg-gray-900 cursor-pointer"
    case "white":
      return "bg-white text-black border border-grey-900 hover:bg-white-500 cursor-pointer"
    default: // red
      return "bg-red-500 text-white hover:bg-red-400 cursor-pointer"
  }
})

const fontSizeClass = computed(() => {
  switch (props.variant) {
    case "black":
      return "text-sm"
    case "white":
      return "text-base"
    default: // red
      return "text-[16px]"
  }
})
</script>

<template>
  <button
    :class="[
      'overflow-hidden font-medium transition-colors duration-200 text-[16px]',
      basePadding,
      variantClasses,
      fontSizeClass,
      props.block && 'w-full',
    ]"
  >
    <slot />
  </button>
</template>
