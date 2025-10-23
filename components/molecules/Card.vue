<template>
  <div
    class="card"
    :style="{
      backgroundImage: `url('https://img.pokemondb.net/artwork/${props.name}.jpg')`,
    }"
  >
    <Text :text="name" />
    <Label :value="name" />
    <div class="shine"></div>
  </div>
</template>

<script setup lang="ts">
import Text from "~/components/atoms/Text.vue"
import Label from "~/components/atoms/Label.vue"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>
<style lang="css" scoped>
.card {
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 18.75rem;
  width: 18.75rem;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  transition-origin: bottom 50%;
  border-radius: 10px;
  transform: rotateX(-0.2deg) skewX(0.2deg);
  box-shadow:
    0 19px 38px rgba(0, 0, 0, 0.3),
    0 15px 12px rgba(0, 0, 0, 0.22);
}

.shine {
  position: absolute;
  right: -50px;
  bottom: -50px;
  width: 1000px;
  height: 150px;
  opacity: 0.4;
  transform: translateX(50%) rotateZ(-45deg);
  transform-origin: 50% 50%;
  transition: all 0.5s ease-in-out;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255),
    rgba(0, 0, 0, 0)
  );
}

.card:hover {
  transform: rotateX(-15deg) skewX(5deg);
}

.card:hover .shine {
  right: 200px;
  bottom: 200px;
}
</style>
