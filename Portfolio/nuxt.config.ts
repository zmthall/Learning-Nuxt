// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
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
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  site: {
    url: "https://example.com",
    name: "My Awesome Website",
  },
  sitemap: {
    xslTips: false,
    sources: ["/api/__sitemap__/blog"],
    autoLastmod: true,
    exclude: [
      "/__nuxt_content/**", // ⛔ Exclude all __nuxt_content internal routes
      "**/sql_dump", // ⛔ Exclude all sql_dump pages]
    ],
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
