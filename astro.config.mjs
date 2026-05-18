// Boxclub Gifhorn e.V. - Astro Config
// Deployed via Vercel Git-Integration: Auto-Build bei Push auf main.
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://boxclub-gifhorn.de',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) =>
        !page.includes('/admin') &&
        !page.includes('/admin-log') &&
        !page.includes('/impressum') &&
        !page.includes('/datenschutz') &&
        !page.includes('/barrierefreiheit'),
    }),
  ],
});
