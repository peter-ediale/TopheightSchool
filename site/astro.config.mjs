// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update to the real domain once one is bought
  site: 'https://topheightschool.pages.dev',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});