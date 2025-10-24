<script setup lang="ts">
import { definePageMeta } from "#imports"
import Button from "~/components/button/Button.vue"
import Input from "~/components/input/Input.vue"

definePageMeta({ layout: "authen" })
</script>

<template>
  <div class="flex flex-col px-24">
    <h2 class="text-[2.25rem] font-medium">Create an account</h2>
    <p class="text-[1rem] py-3.75">Enter your details below</p>

    <Input
      variant="underline"
      placeholder="Name"
      class="py-8"
    />

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

    <Button
      variant="primary"
      size="lg"
      class="mt-10"
    >
      Create Account
    </Button>

    <Button
      variant="thirdary"
      size="lg"
      class="mt-4"
    >
      <div class="flex items-center justify-center gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
          alt="google"
          class="w-6 h-6"
        />
        Sign up with Google
      </div>
    </Button>

    <div class="flex items-center justify-center gap-2 mt-10">
      <p class="text-[1rem] text-grey-500">Already have account?</p>
      <a
        href="/signin"
        class="font-semibold underline decoration-grey-900 underline-offset-2 text-[1rem] text-grey-500"
      >
        Log in
      </a>
    </div>
  </div>
</template>
