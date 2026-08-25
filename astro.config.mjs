// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://agamesports.net',
	integrations: [
		sitemap({
			filter: (page) => !page.endsWith('/contact/thank-you/'),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
