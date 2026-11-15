import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        _draft: z.boolean().optional(),
        ident: z.number().optional(),
        img: z.string().optional(),
        tags: z.array(z.string()).optional(),
        excerpt: z.object({
          type: z.string(),
          children: z.any(),
        }),
      }),
    }),
  },
})
