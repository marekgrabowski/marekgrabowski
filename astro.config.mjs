import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [preact({
    compat: true
  }), tailwind(), compress(), mdx({
    drafts: true
  }), sitemap()],
  experimental: {
    assets: true
  },
  site: 'https://marekgrabowski.net',
});