import { navigateTo, useNuxtApp } from "#app"

export async function useGoogleSignIn() {
  const { $firebase } = useNuxtApp()

  try {
    const result = await $firebase.signInWithPopup(
      $firebase.auth,
      $firebase.provider,
    )
    const user = result.user
    console.log("Google user:", user)

    const token = await user.getIdToken()
    localStorage.setItem("userIdToken", token)

    navigateTo("/")
  } catch (error) {
    console.error("Google Sign-In error:", error)
  }
}
