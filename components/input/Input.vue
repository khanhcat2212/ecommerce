<script setup lang="ts">
import { computed } from "vue"
import { Search, SendHorizonal } from "lucide-vue-next"

type Variant = "underline" | "box" | "search" | "form" | "direct" | "code"

const emit = defineEmits(["update:modelValue"])

const { variant, icon, placeholder, modelValue } = defineProps({
  variant: {
    type: String as () => Variant,
    default: "underline",
  },
  icon: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
})

// style container
const baseClass = computed(() => {
  switch (variant) {
    case "search":
      return "bg-gray-100 rounded-md px-4 py-3 flex items-center gap-2"
    case "underline":
      return "border-b border-gray-500 pb-2 focus-within:border-black"
    case "form":
      return "bg-gray-100 rounded-sm px-4 py-3 flex items-center"
    case "direct":
      return "bg-black rounded-sm px-4 py-3 flex items-center gap-2"
    case "code":
      return "border border-black rounded-sm px-4 py-3 flex items-center"
    default:
      return "border border-black rounded-sm px-4 py-3 flex items-center"
  }
})

// style input
const inputClass = computed(() => {
  switch (variant) {
    case "direct":
      return "bg-black text-white placeholder-gray-500"
    case "search":
    case "form":
      return "bg-gray-100 text-gray-900 placeholder-gray-400"
    case "code":
      return "text-gray-900 placeholder-gray-400"
    default:
      return "bg-transparent text-gray-500 placeholder-gray-400"
  }
})
</script>

<template>
  <div :class="['w-full', baseClass]">
    <input
      :placeholder="placeholder"
      :value="modelValue"
      class="w-full outline-none text-[1rem]"
      :class="inputClass"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />

    <!-- optional icons -->
    <Search
      v-if="variant === 'search' && icon === 'search'"
      class="w-5 h-5 text-black cursor-pointer"
    />
    <SendHorizonal
      v-else-if="variant === 'direct' && icon === 'send'"
      class="w-5 h-5 text-white cursor-pointer"
    />
  </div>
</template>
