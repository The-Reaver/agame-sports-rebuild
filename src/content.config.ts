import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		template: z.enum(['hub', 'program', 'camp', 'info', 'legal']),
		navGroup: z.string(),
		sport: z.string().optional(),
		description: z.string(),
		ageRange: z.string().optional(),
		priceNote: z.string().optional(),
		scheduleNote: z.string().optional(),
		facts: z
			.array(z.object({ label: z.string(), value: z.string() }))
			.optional(),
		ctaLabel: z.string().default('Book a Tour'),
		ctaHref: z.string().default('/contact/'),
		heroEyebrow: z.string().optional(),
		heroHeadline: z.string(),
		heroSub: z.string().optional(),
		order: z.number().default(0),
	}),
});

export const collections = { pages };
