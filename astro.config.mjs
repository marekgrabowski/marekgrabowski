import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [tailwind(), mdx({
    drafts: true
  })],
  experimental: {
    assets: true
   }
 
});