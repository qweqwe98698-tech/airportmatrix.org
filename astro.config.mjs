import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://airportmatrix.org',
  trailingSlash: 'never',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;
        // Purge non-canonical, 302 redirect bridges, admin control and 404 pages from XML sitemap
        return (
          !path.startsWith('/go') &&
          !path.startsWith('/admin') &&
          !path.includes('/404')
        );
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
