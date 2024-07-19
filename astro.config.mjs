import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://aroandriamaro.com",
  integrations: [
    preact(),
    expressiveCode({
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
    }),
    tailwind(),
  ],
});
