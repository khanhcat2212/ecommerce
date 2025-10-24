<script setup lang="ts">
import { ref, onMounted } from "vue"
import Button from "@/components/button/Button.vue"

const countdown = ref({
  days: 5,
  hours: 23,
  minutes: 59,
  seconds: 35,
})

onMounted(() => {
  setInterval(() => {
    if (countdown.value.seconds > 0) countdown.value.seconds--
    else {
      countdown.value.seconds = 59
      if (countdown.value.minutes > 0) countdown.value.minutes--
      else {
        countdown.value.minutes = 59
        if (countdown.value.hours > 0) countdown.value.hours--
        else {
          countdown.value.hours = 23
          countdown.value.days = Math.max(countdown.value.days - 1, 0)
        }
      }
    }
  }, 1000)
})
</script>

<template>
  <section
    class="relative bg-linear-to-r from-black to-neutral-900 text-white h-125 overflow-hidden"
  >
    <div
      class="flex flex-col md:flex-row justify-between items-center px-14 py-17.5"
    >
      <!-- LEFT CONTENT -->
      <div class="max-w-lg">
        <p class="text-green-900 font-semibold text-[1rem]">Categories</p>
        <h2 class="text-[3rem] font-semibold leading-tight py-7">
          Enhance Your
          <br />
          Music Experience
        </h2>

        <!-- COUNTDOWN -->
        <div class="flex gap-6">
          <div
            v-for="(value, label) in countdown"
            :key="label"
            class="flex flex-col items-center justify-center w-15.5 h-15.5 bg-white text-black rounded-full font-semibold"
          >
            <span class="text-[1rem] font-semibold">
              {{ value.toString().padStart(2, "0") }}
            </span>
            <span class="text-[.6875rem] font-normal capitalize">
              {{ label }}
            </span>
          </div>
        </div>

        <Button
          variant="quaternary"
          size="sm"
          class="mt-10"
        >
          Buy Now!
        </Button>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="mt-10 md:mt-0 md:w-1/2 flex justify-end">
        <img
          src="https://www.pngall.com/wp-content/uploads/13/Speaker-Sound-PNG-Free-Image.png"
          alt="JBL Speaker"
          class="max-w-md md:max-w-lg object-contain"
        />
      </div>
    </div>
  </section>
</template>
