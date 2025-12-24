import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ashik-ms.github.io/astro-portfolio',
  base: '/astro-portfolio',
  integrations: [mdx(), sitemap(), tailwind()],
});