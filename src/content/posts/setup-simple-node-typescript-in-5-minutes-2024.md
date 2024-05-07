---
title: Setup a simple Node Typescript Project in 5 minutes - 2024 edition
description: We are in May 2024, I just want to setup a simple Node project. But it’s so freaking hard. I tried every blog post in google’s first page results. None are working, at least as I want it.
pubDate: 2024-05-07
author: Aro Andriamaro
image:
  url: /covers/main.webp
  alt: Desk with computer desktop
tags: ["node", "typescript", "starter"]
---

We are in May 2024, I just want to setup a simple Node project. But it’s so freaking hard. I tried every blog post in google’s first page results. None are working, at least as I want it.

Why is it so ducking 🦆 hard to have a Node development setup that is in `Typescript` and uses `ESM` !?

So, after a frustrating couple of hours of searching and tweaking, I finally found a way to have a simple setup that just works (for now)

## Requirements

So as I said, I want to it to use

- Typescript
- ESM - `import` and `export`
- Node 20 (this is a LTS version)

That’s literally it.

## The solution

### Dependencies

First of all, install all the dependencies

```bash
pnpm i -D typescript @types/node tsx tsc-alias rimraf
```

- `typescript` and `@types/node` : those are the usual packages needed for every TS project. Nothing special here
- `tsx` : for typescript code execution. It is a replacement of `ts-node`. As the latter [does not work in Node 20](https://github.com/TypeStrong/ts-node/issues/1997)
- `tsc-alias` : for replacing alias paths after typescript compilation
- `rimraf` : a simple utility for deleting the `dist` folder before each compilation

> **DISCLAIMER**: I am NOT an experienced Node developer. I mostly work in frontend development with React. This is just a simple node setup that works for me. I am sure it’s possible to make it even simpler without relying on third party dependencies like `tsx` and `tsc-alias.`. But I am just not in the mood of digging further 🥲

### tsconfig.json

For the `tsconfig` file, I use the config from this [TotalTypescript](https://www.totaltypescript.com/typescript-and-node#14-typescript-config) blog post.

> **NOTE** : I did try to follow this blog post steps. But I didn’t like to have two `dev` scripts that run concurrently. At the time, I was playing with some AI stuff and was trying to `console.log` the stream response from the AI, and it just didn’t get displayed to the console. I suspect this concurrent run of two `dev` scripts.

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "es2022",
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",
    "isolatedModules": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "moduleResolution": "NodeNext",
    "module": "NodeNext",
    "outDir": "dist",
    "sourceMap": true,
    "lib": ["es2022"],

    /* I add this part because I want absolute imports */
    "baseUrl": ".",
    "paths": {
      "src/*": ["src/*"]
    }
  }
}
```

### package.json

```json
{
  "type": "module",
  "scripts": {
    "build": "rimraf dist && tsc --project tsconfig.json && tsc-alias -p tsconfig.json",
    "dev": "NODE_ENV=development tsx --watch --env-file=.env src/index.ts",
    "start": "node --env-file=.env dist/index.js"
  },
  "engines": {
    "node": "20"
  }
}
```

- `type:"module"` : tells Node to use ESM
- `build` : builds the project with `tsc` and replaces alias paths with `tsc-alias`
- `dev` : here lies the magic, `tsx` just works and can be used as a replacement of `node`. All `node` arguments can be used with `tsx` and that is awesome
- `start` : runs the compiled files with Node
- `--env-file` : loads environment variables, so no need of `dotenv` anymore
- `--watch` : watch mode introduced in Node 18

### Caveats when importing a file

This is the last thing you want to be aware of. [When importing a file, you have to suffix](https://www.totaltypescript.com/relative-import-paths-need-explicit-file-extensions-in-ecmascript-imports) the import paths with `.js`

```tsx
import { hello } from "src/utils/hello.js";
```

## Conclusion

And that’s it, holy cow I struggled so much just to find this setup. Some of you that are already familiar with `tsx` may call me a noob 😅 and you are not totally wrong.

I was used to use `nodemon` and `ts-node` before but my previous setup don’t work anymore 🤷🏽‍♂️

I think it is not not normal that it’s so hard to setup a modern Node project but also to find the **right information** to do that, as there are literally no single way of doing this.

But in the end I am happy that I succeed (for now). Thanks for reading, ciao ciao

[You can find the complete repo here](https://github.com/notAro14/node-starter)
