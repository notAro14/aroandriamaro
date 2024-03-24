---
title: Code snippet - limit paragraph lines
pubDate: 2022-04-23
description: Truncate and limit long paragraph with this component
author: "Aro Andriamaro"
image:
  url: "/covers/cover-16-9.webp"
  alt: "Desk with computer desktop"
tags: ["react", "css", "code snippet", "clamp"]
---

## Implementation

### Emotion

Implementation in [Emotion](https://emotion.sh/docs/styled) or any CSS-in-JS like libraries using styled function

```ts title="TextEllipsed.tsx"
import styled from "@emotion/styled";

interface TextEllipsedProps {
  maxLine?: string | number;
}

const TextEllipsed = styled("p")<TextEllipsedProps>(
  {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  },
  ({ maxLine }) => ({
    lineClamp: typeof maxLine === "number" ? String(maxLine) : maxLine,
    WebkitLineClamp: typeof maxLine === "number" ? String(maxLine) : maxLine,
  })
);

TextEllipsed.defaultProps = {
  maxLine: 1,
};

export default TextEllipsed;
```

### Stitches

Implementation using [radix ui Stitches](https://stitches.dev/)

```ts title="TextEllipsed.tsx"
import { createStitches } from "@stitches/react";

const { styled } = createStitches({
  utils: {
    maxLine: (value: string | number) => ({
      lineClamp: typeof value === "number" ? String(value) : value,
      "-webkit-line-clamp": typeof value === "number" ? String(value) : value,
    }),
  },
});

const TextEllipsed = styled("p", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  lineClamp: "1",
  "-webkit-line-clamp": "1",
});
```

## Usage

### Emotion

```tsx title="App.tsx"
const App = () => {
  return <TextEllipsed maxLine={2}>Paragraph</TextEllipsed>;
};
```

### Stitches

```tsx title="App.tsx"
const App = () => {
  return <TextEllipsed css={{ maxLine: 2 }}>Paragraph</TextEllipsed>;
};
```
