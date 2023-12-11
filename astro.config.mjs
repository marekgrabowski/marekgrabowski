import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://marekgrabowski.net',
  markdown: {
    drafts: true
  },
  integrations: [preact({
    compat: true
  }), tailwind(), compress(), mdx({
    drafts: true
  }), sitemap()],
  experimental: {
  },
  site: 'https://marekgrabowski.net',
});