<template>
  <label
    class="label"
    :style="{ backgroundColor: bgColor }"
  >
    {{ value }}
  </label>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { randomNumberFromRange } from "~/utils"

const bgColor = ref<string>("")

onMounted(() => {
  const COLORS = ["green", "blue", "violet", "orange"]
  const randIndex = randomNumberFromRange(0, COLORS.length - 1)
  console.log(randIndex)
})

const { value } = defineProps({
  value: {
    type: String,
    require: true,
    default: "",
  },
})
</script>
<style>
.label {
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  margin: 0;
  border-radius: 8px;
  padding: 2px 8px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
