import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    image: z.object({
      url: image(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    tags: z.array(z.string()),
    lang: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
