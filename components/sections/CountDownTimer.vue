<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const props = defineProps({
  targetTime: {
    type: String,
    required: true,
  },
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
let interval: number | undefined

const updateCountdown = () => {
  const now = new Date().getTime()
  const target = new Date(props.targetTime).getTime()
  const diff = target - now

  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0
    clearInterval(interval)
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / (1000 * 60)) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}

onMounted(() => {
  updateCountdown()
  interval = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="flex items-center gap-6 text-center font-semibold">
    <div>
      <p class="text-[.75rem]">Days</p>
      <p class="text-[2rem] font-bold">{{ String(days).padStart(1, "0") }}</p>
    </div>
    <span class="text-red-500 text-3xl font-bold">:</span>
    <div>
      <p class="text-[.75rem]">Hours</p>
      <p class="text-[2rem] font-bold">{{ String(hours).padStart(1, "0") }}</p>
    </div>
    <span class="text-red-500 text-3xl font-bold">:</span>
    <div>
      <p class="text-[.75rem]">Minutes</p>
      <p class="text-[2rem] font-bold">
        {{ String(minutes).padStart(1, "0") }}
      </p>
    </div>
    <span class="text-red-500 text-3xl font-bold">:</span>
    <div>
      <p class="text-[.75rem]">Seconds</p>
      <p class="text-[2rem] font-bold">
        {{ String(seconds).padStart(1, "0") }}
      </p>
    </div>
  </div>
</template>
