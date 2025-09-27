/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f4',
          100: '#ffe9e6',
          200: '#ffd6d0',
          300: '#ffb5a8',
          400: '#ff8a75',
          500: '#ff7f6b',
          600: '#ff6b5b',
          700: '#ff4f3a',
          800: '#e63e2f',
          900: '#c03428',
        }
      }
    },
  },
  plugins: [],
}
