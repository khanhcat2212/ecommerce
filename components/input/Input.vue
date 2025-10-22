<script setup lang="ts">
import { computed } from "vue"
import { Search, SendHorizonal } from "lucide-vue-next"

const props = defineProps({
  variant: {
    type: String,
    default: "underline", // 'underline' | 'box' | 'search' | 'form' | 'direct' | 'code'
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

const baseClass = computed(() => {
  switch (props.variant) {
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
</script>

<template>
  <div :class="['w-full', baseClass]">
    <!-- Search -->
    <template v-if="variant === 'search'">
      <input
        :placeholder="placeholder"
        class="bg-gray-100 w-full outline-none text-grey-900 placeholder-gray-400 text-[16px]"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <Search
        v-if="icon === 'search'"
        class="w-5 h-5 text-black cursor-pointer"
      />
    </template>

    <!-- Form -->
    <template v-else-if="variant === 'form'">
      <input
        :placeholder="placeholder"
        class="bg-gray-100 w-full outline-none text-grey-500 placeholder-gray-500 text-[16px]"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
    </template>

    <!-- Direct -->
    <template v-else-if="variant === 'direct'">
      <input
        :placeholder="placeholder"
        class="bg-black w-full outline-none text-white placeholder-grey-500 text-[16px]"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <SendHorizonal
        v-if="icon === 'send'"
        class="w-5 h-5 text-white cursor-pointer"
      />
    </template>

    <!-- Code -->
    <template v-else-if="variant === 'code'">
      <input
        :placeholder="placeholder"
        class="w-full outline-none text-gray-900 placeholder-gray-400 text-[16px]"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
    </template>

    <!-- Underline -->
    <template v-else>
      <input
        :placeholder="placeholder"
        class="bg-transparent w-full outline-none text-gray-500 placeholder-gray-400 text-[16px]"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
    </template>
  </div>
</template>
