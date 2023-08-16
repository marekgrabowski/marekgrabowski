import { defineCollection, z } from 'astro:content';

export const collections = {
	projects: defineCollection({
		schema: ({ image }) =>
		  z.object({
			draft: z.boolean(),
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: image(),
			img_alt: z.string().optional(),
		}),
	}),
};
