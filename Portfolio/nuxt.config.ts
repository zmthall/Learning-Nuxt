// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
  ],
  colorMode: {
    classSuffix: "",
    classPrefix: "", // default adds 'color-mode-'
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "min-light",
            dark: "min-dark",
          },
        },
      },
    },
  },
});
