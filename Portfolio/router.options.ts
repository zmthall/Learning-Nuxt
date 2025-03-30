// https://nuxt.com/docs/api/nuxt-config#router
import type { RouterConfig } from "@nuxt/schema";

console.log("✅ router.options.ts loaded");

export default {
  scrollBehavior(to, from, savedPosition) {
    console.log("[router] scrollBehavior triggered", to.fullPath);

    if (savedPosition) return savedPosition;

    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            console.warn("⚠️ Element not found for hash:", to.hash);
          }
          resolve(false);
        }, 300);
      });
    }

    return { top: 0, left: 0, behavior: "smooth" };
  },
} satisfies RouterConfig;
