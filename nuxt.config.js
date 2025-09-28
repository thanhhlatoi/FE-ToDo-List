// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  pages: true,
  srcDir: '.',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // Production configuration
  nitro: {
    preset: 'static'
  },
  // Build configuration
  build: {
    extractCSS: true
  },
  // Runtime config
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? 'https://your-domain.vercel.app' : 'http://localhost:3000'
    }
  }
})
