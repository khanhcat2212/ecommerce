/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "~/components/**/*.{vue,js,ts}",
    "~/layouts/**/*.vue",
    "~/pages/**/*.vue",
    "~/plugins/**/*.{js,ts}",
    "~/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        while: "#fff",
        primary: {
          900: "#DB4444",
        },
        green: {
          500: "#00FF66",
        },
      },
    },
  },
  plugins: [],
}
