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
      return "w-[270px] h-[230px] border border-grey-200 hover:bg-red-500 hover:border-red-500 transition-all duration-300"
    case "service":
      return "w-[270px] h-[160px]"
    default:
      return "w-[270px] h-[160px]"
  }
})

const titleClasses = computed(() => {
  switch (variant) {
    case "achievement":
      return "text-[32px] font-bold"
    case "service":
      return "pt-2 text-[20px] font-semibold"
    default:
      return "text-[24px]"
  }
})

const descriptionClasses = computed(() => {
  switch (variant) {
    case "achievement":
      return "text-[16px] font-normal"
    case "service":
      return "pt-2 text-[14px] font-normal"
    default:
      return "text-[14px]"
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
          class="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center transition-all duration-300"
          :class="variant === 'achievement' ? 'group-hover:bg-white/30' : ''"
        >
          <div
            class="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center transition-all duration-300"
            :class="variant === 'achievement' ? 'group-hover:bg-white' : ''"
          >
            <component
              :is="icon"
              v-if="icon"
              class="w-[32px] h-[32px] text-white transition-colors duration-300"
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
