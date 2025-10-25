import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/storybook",
    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    typeCheck: true,
  },

  imports: {
    autoImport: false,
  },

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      NUXT_PUBLIC_FIREBASE_API_KEY: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
        process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      NUXT_PUBLIC_FIREBASE_PROJECT_ID:
        process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
        process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
        process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      NUXT_PUBLIC_FIREBASE_APP_ID: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
    },
  },
})
