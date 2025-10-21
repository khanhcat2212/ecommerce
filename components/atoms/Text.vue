<template>
  <p class="title">{{ text }}</p>
</template>
<script lang="ts" setup>
const { text } = defineProps({
  text: {
    type: String,
    require: true,
    default: "",
  },
})
</script>
<style>
.title {
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin: 0;
}
</style>
