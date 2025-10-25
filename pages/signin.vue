<script setup lang="ts">
import { definePageMeta } from "#imports"
import Button from "~/components/button/Button.vue"
import Input from "~/components/input/Input.vue"

definePageMeta({ layout: "authen" })
</script>

<template>
  <div class="flex flex-col px-24">
    <h2 class="text-[2.25rem] font-medium">Log in to Exclusive</h2>
    <p class="text-[1rem] py-3.75">Enter your details below</p>

    <Input
      variant="underline"
      placeholder="Email or Phone Number"
      class="pt-10"
    />

    <Input
      variant="underline"
      placeholder="Password"
      class="pt-10"
    />

    <div class="flex items-center justify-between mt-10">
      <Button
        variant="primary"
        size="sm"
      >
        Log In
      </Button>

      <p class="text-[16px] text-red-500">Forget Password?</p>
    </div>
  </div>
</template>
