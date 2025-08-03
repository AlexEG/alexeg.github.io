import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://alexeg.github.io",
  // integrations: [mdx(), sitemap(), tailwind(), react()]
  integrations: [mdx(), sitemap(), tailwind()]
});