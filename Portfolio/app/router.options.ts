// https://nuxt.com/docs/api/nuxt-config#router
import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    }

    return { top: 0, behavior: "smooth" };
  },
} satisfies RouterConfig;
