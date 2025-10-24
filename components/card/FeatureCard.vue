<script setup lang="ts">
import { computed } from "vue"

type Variant = "service" | "achievement"

const { variant, title, description, icon } = defineProps({
  variant: {
    type: String as () => Variant,
    default: "category",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: [Object, String],
    required: false,
    default: null,
  },
})

const variantClasses = computed(() => {
  switch (variant) {
    case "achievement":
      return "w-[16.875rem] h-[14.375rem] border border-grey-200 hover:bg-red-500 hover:border-red-500 transition-all duration-300"
    case "service":
      return "w-[16.875rem] h-[10rem]"
    default:
      return "w-[16.875rem] h-[10rem]"
  }
})

const titleClasses = computed(() => {
  switch (variant) {
    case "achievement":
      return "text-[2rem] font-bold"
    case "service":
      return "pt-2 text-[1.25rem] font-semibold"
    default:
      return "text-[1.5rem]"
  }
})

const descriptionClasses = computed(() => {
  switch (variant) {
    case "achievement":
      return "text-[1rem] font-normal"
    case "service":
      return "pt-2 text-[.875rem] font-normal"
    default:
      return "text-[.875rem]"
  }
})
</script>

<template>
  <div
    class="group flex flex-col items-center justify-center text-center rounded-xs cursor-pointer"
    :class="variantClasses"
  >
    <div class="flex flex-col items-center justify-center h-full space-y-4">
      <div class="relative flex items-center justify-center">
        <div
          class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center transition-all duration-300"
          :class="variant === 'achievement' ? 'group-hover:bg-white/30' : ''"
        >
          <div
            class="w-14.5 h-14.5 rounded-full bg-black flex items-center justify-center transition-all duration-300"
            :class="variant === 'achievement' ? 'group-hover:bg-white' : ''"
          >
            <component
              :is="icon"
              v-if="icon"
              class="w-8 h-8 text-white transition-colors duration-300"
              :class="variant === 'achievement' ? 'group-hover:text-black' : ''"
            />
          </div>
        </div>
      </div>

      <!-- title -->
      <p
        class="text-black transition-colors duration-300"
        :class="[
          titleClasses,
          variant === 'achievement' ? 'group-hover:text-white' : '',
        ]"
      >
        {{ title }}
      </p>

      <!-- description -->
      <p
        v-if="description"
        class="text-gray-600 transition-colors duration-300"
        :class="[
          descriptionClasses,
          variant === 'achievement' ? 'group-hover:text-white' : '',
        ]"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
