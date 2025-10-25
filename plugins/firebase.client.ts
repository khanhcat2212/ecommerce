import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { defineNuxtPlugin, useRuntimeConfig } from "#app"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.NUXT_PUBLIC_FIREBASE_API_KEY as string,
    authDomain: config.public.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
    projectId: config.public.NUXT_PUBLIC_FIREBASE_PROJECT_ID as string,
    storageBucket: config.public.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: config.public
      .NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
    appId: config.public.NUXT_PUBLIC_FIREBASE_APP_ID as string,
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

  return {
    provide: {
      firebase: { app, auth, provider, signInWithPopup },
    },
  }
})
