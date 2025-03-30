import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: {
        include: "blog/**/*.md",
      },
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        publishedAt: z.string().optional(),
        publishYear: z.number().optional(),
        toc: z.boolean().optional(),
        displayYear: z.boolean().optional(),
        icon: z.string().optional(),
        lang: z.string().optional(),
        ogImage: z.string().optional(),
        twitterImage: z.string().optional(),
        head: z
          .object({
            meta: z
              .array(
                z.object({
                  name: z.string(),
                  content: z.string(),
                })
              )
              .optional(),
          })
          .optional(),
      }),
    }),
    page: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
  },
});
