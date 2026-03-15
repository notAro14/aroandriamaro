import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://aroandriamaro.com",
  integrations: [expressiveCode({
    themes: ["dracula"],
    plugins: [pluginLineNumbers()],
    defaultProps: {
      showLineNumbers: false,
    },
    styleOverrides: {
      frames: {
        frameBoxShadowCssValue: "unset",
      },
    },
  }), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});