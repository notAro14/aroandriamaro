# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog of Aro Andriamaro (https://aroandriamaro.com). Built with Astro v6, Tailwind CSS v4, DaisyUI v5, and MDX. Content is primarily in French.

## Commands

- **Dev server:** `pnpm dev`
- **Build (with type check):** `pnpm build` (runs `astro check && astro build`)
- **Preview production build:** `pnpm preview`
- **Type check only:** `npx astro check`

Package manager is **pnpm**.

## Architecture

- **Content:** Blog posts live in `src/content/posts/` as `.md` or `.mdx` files. The content collection schema is defined in `src/content.config.ts` — posts require `title`, `pubDate`, `description`, `image` (with `url`, `alt`, optional `caption`), `tags`, and optional `lang` (defaults to `"fr"`).
- **Routing:** Dynamic routes via `src/pages/posts/[...slug].astro` and `src/pages/tags/[tag].astro`. RSS feed at `src/pages/rss.xml.js`.
- **Layouts:** `BaseLayout.astro` handles theme switching (garden/dracula based on OS preference), View Transitions, nav, and footer. `PostLayout.astro` wraps individual articles.
- **Styling:** Tailwind v4 via `@tailwindcss/vite` plugin. DaisyUI v5 themes (`garden` light, `dracula` dark) configured in `src/styles/global.css`. Custom dark variant targets `[data-theme=dracula]`. Typography plugin used for prose content.
- **Images:** Post cover images go in `src/assets/covers/` (webp). Use Astro's built-in image optimization with `sharp`.
- **Code blocks:** Expressive Code integration with Dracula theme and optional line numbers.

## Conventions

- Post filenames use kebab-case
- Commit messages are in French
- Blog posts are sorted by `pubDate` descending
