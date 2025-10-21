<template>
  <div class="cards">
    <template
      v-for="(item, idx) of data?.results"
      :key="idx"
    >
      <Card
        v-if="item?.name"
        :name="item.name"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
import Card from "~/components/molecules/Card.vue"
import { useFetchPoke } from "~/composables/usePokedex"

const { data } = useFetchPoke()
</script>

<style>
.cards {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
</style>
