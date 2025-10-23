<script setup lang="ts">
const { title, icon } = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: [Object, String],
    required: false,
    default: null,
  },
})
</script>

<template>
  <div
    class="group flex flex-col border border-grey-200 rounded-sm items-center justify-center text-center cursor-pointer w-[170px] h-[145px] hover:border-red-500 hover:bg-red-500"
  >
    <div class="flex flex-col items-center justify-center h-full space-y-4">
      <component
        :is="icon"
        v-if="icon"
        class="w-[56px] h-[56px] text-black transition-colors group-hover:text-white"
      />

      <p
        class="text-black text-[16px] transition-colors group-hover:text-white"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>
