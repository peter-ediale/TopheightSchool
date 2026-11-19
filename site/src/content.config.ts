import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    cover: image(),
    tag: z.enum(['News', 'Event', 'Admissions', 'WAEC']).default('News'),
  }),
});

export const collections = { news };
