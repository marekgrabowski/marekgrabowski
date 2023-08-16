import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [tailwind(), compress(), mdx({
    drafts: true
  })],
  experimental: {
    assets: true
   }
 
});