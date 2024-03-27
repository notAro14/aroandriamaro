---
title: So I migrated my blog from Next to Astro
description: Migration of a Next SSG site to Astro
author: Aro Andriamaro
pubDate: 2024-03-27
image:
  url: /covers/astro.webp
  alt: Astro static site generation
tags: ["next.js", "astro", "SSG"]
---

Last week I decided to migrate my astounding Next.js blog to [Astro](https://astro.build/). This blog was never a serious project I dedicated a lot of time to.

But somehow it became a little bit complicated. The MDX parsing was made using a combination of [`esbuild`](https://www.npmjs.com/package/esbuild), [`gray-matter`](https://www.npmjs.com/package/gray-matter) and [`mdx-bundler`](https://www.npmjs.com/package/mdx-bundler). The syntax highlighting was made with the [`prism-react-renderer`](https://www.npmjs.com/package/prism-react-renderer) package.

The issue came when I tried to update `esbuild`. All of a sudden, everything broke. So I never tried to update my packages again since that.

So I decided to try Astro. It took me only 1 day to migrate my site. On top of that, I only needed to follow the official astro blog tutorial. That covered all my need.

With Astro, I was able to parse markdown, get code blocks with syntax highlighting and add a RSS feed easily.

All of that with just the official tutorial. That is insane 🤯

The only optional package I installed is [`astro-expressive-code`](https://expressive-code.com/installation/#astro). This allows me to add some really nice features around code blocks ([_frames_](https://expressive-code.com/key-features/frames/), _copy to clipboard button_, _additional themes_, etc..)

I am really surprised how easy it is to build a static site with Astro. But it's not just limited to SSG. All the island architecture thing is really awesome.

For sure, I will continue to experiment with Astro from now on.
