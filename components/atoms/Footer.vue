<script setup lang="ts">
import Input from "@/components/input/Input.vue"
import { accounts } from "~/constants/accounts"
import { quickLinks } from "~/constants/quickLinks"
import { socials } from "~/constants/socials"
</script>

<template>
  <footer class="bg-black text-white h-110">
    <div
      class="max-w-7xl mx-auto px-14 py-18 grid grid-cols-1 md:grid-cols-5 gap-12"
    >
      <!-- Exclusive -->
      <div>
        <h2 class="text-[1.5rem] font-semibold pb-4">Exclusive</h2>
        <p class="text-[1.25rem] font-medium pb-6">Subscribe</p>
        <p class="text-grey-100 text-[1rem] pb-4">
          Get 10% off your first order
        </p>
        <Input
          variant="direct"
          icon="send"
          placeholder="Enter your email"
        />
      </div>

      <!-- Support -->
      <div>
        <h3 class="text-[1.25rem] font-semibold py-1 pb-6">Support</h3>
        <p class="text-grey-100 text-[1rem] pb-4">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p class="text-grey-100 text-[1rem] pb-4">exclusive@gmail.com</p>
        <p class="text-grey-100 text-[1rem]">+88015-88888-9999</p>
      </div>

      <!-- Account -->
      <div>
        <h3 class="text-[1.25rem] font-semibold py-1 pb-6">Account</h3>

        <ul class="space-y-4 text-grey-100">
          <li
            v-for="(account, index) in accounts"
            :key="index"
          >
            <a :href="account.href">
              {{ account.label }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Quick Link -->
      <div>
        <h3 class="text-[1.25rem] font-semibold py-1 pb-6">Quick Link</h3>
        <ul class="space-y-4 text-grey-100">
          <li
            v-for="(quickLink, index) in quickLinks"
            :key="index"
          >
            <a :href="quickLink.href">
              {{ quickLink.label }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Download App -->
      <div>
        <h3 class="text-[1.25rem] font-semibold py-1 pb-6">Download App</h3>
        <p class="text-grey-100 text-[.75rem] pb-4">
          Save $3 with App New User Only
        </p>
        <div class="flex items-center gap-3 pb-6">
          <img
            src="https://www.hellotech.com/guide/wp-content/uploads/2020/05/HelloTech-qr-code-1024x1024.jpg"
            alt="QR"
            class="w-20 h-20 bg-white p-1"
          />
          <div class="flex flex-col gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              class="w-28"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              class="w-28"
            />
          </div>
        </div>

        <div class="flex items-center gap-8">
          <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.href"
            target="_blank"
          >
            <component
              :is="social.icon"
              class="w-5 h-5 text-white"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="border-t border-grey-900 text-center pb-4 pt-3 text-grey-900 text-[1rem]"
    >
      © Copyright Rimel 2022. All rights reserved
    </div>
  </footer>
</template>
