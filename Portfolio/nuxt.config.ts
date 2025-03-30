// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  future: { compatibilityVersion: 4 },
  colorMode: {
    classSuffix: "",
    classPrefix: "", // default adds 'color-mode-'
  },
});
