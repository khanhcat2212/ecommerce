<script setup lang="ts">
import { Slash } from "lucide-vue-next"
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const segments = computed(() => {
  const parts = route.path.split("/").filter(Boolean)
  return parts
})

const goHome = () => {
  router.push("/")
}
</script>

<template>
  <nav class="flex items-center text-[.875rem] text-gray-400 space-x-2 pb-20">
    <button
      class="hover:text-grey-300 transition cursor-pointer"
      @click="goHome"
    >
      Home
    </button>

    <template
      v-for="(segment, index) in segments"
      :key="index"
    >
      <Slash class="w-4 h-4 text-gray-300" />
      <span
        v-if="index === segments.length - 1"
        class="text-black capitalize cursor-pointer"
      >
        {{ segment }}
      </span>
      <button
        v-else
        class="hover:text-black capitalize cursor-pointer"
        @click="router.push('/' + segment)"
      >
        {{ segment }}
      </button>
    </template>
  </nav>
</template>
