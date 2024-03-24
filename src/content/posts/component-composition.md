---
title: Component composition in React
description: How to use composition in React
pubDate: 2021-10-01
author: Aro Andriamaro
image:
  url: /covers/cover-16-9.webp
  alt: Desk with computer desktop
tags: ["react", "composition"]
---

One simple way to improve your components in React is to use [composition](https://reactjs.org/docs/composition-vs-inheritance.html). This is a very simple pattern but yet not used that much by developers who just begun their React journey.

Basically, composition means using the _children_ prop. With composition, you can improve _readability_, _modularity_ and _flexibility_.

## List component

Let's take a very simple example of a component that renders a list of items.

```tsx
// ❌ don't do this

// List.tsx
import { FC } from "react";

interface ListProps {
  items: string[];
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

// App.tsx
const App: FC = () => {
  return <List items={["John Doe", "Jane Doe"]} />;
};
```

The problem here is that it does not give much flexibility to the consumers (other developers) of our _List_ component.

Sure, the component is very simple to use: you just have to pass an array of _string_ to render items.

But what if you wanted to customize the individual item (say you want to add an icon to each item) ? You would have to update the _List_ component yourself.

In a little codebase, this is not a problem in itself. But it can be a source of regression in a large codebase where _List_ is used in many places.

And what if _List_ was enclosed in a library or external package ? Then you don't have access to the internal of the component. Therefore, customization of individual item is not possible.

To improve the flexibility of _List_, i-e give developers the power to customize the behavior of our component, we can re-write _List_ with composition in mind.

```tsx
// ✅ it is better

// List.tsx
import { FC } from "react";

const List: FC = ({ children }) => {
  return <ul>{children}</ul>;
};

// App.tsx
const App: FC = () => {
  const items = ["John", "Jane"];
  return (
    <List>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  );
};
```

As you can see, we give the responsibility of rendering the items to consumers of _List_. At first glance, it seems like giving more work to developers.

But, let's not stop there. We can build _ListItem_ component to complete our example.

```tsx
// ✅ it is even better

// List.tsx
import { FC } from "react";

const List: FC = ({ children }) => {
  return <ul>{children}</ul>;
};

// ListItem.tsx
import { FC } from "react";

const ListItem: FC = ({ children }) => {
  return <li>{children}</li>;
};

// App.tsx
const App: FC = () => {
  const items = ["John", "Jane"];
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  );
};
```

This way, we give developers the power to render anything they want. In the first example, we were limited to rendering _string_ only.

Composition gives developers the control of what should be rendered as individual items. Now, we can add icons to our individual item.

```tsx
// App.tsx
import { FC } from "react";

const App: FC = () => {
  return (
    <List>
      <ListItem>
        <span>🚀</span>
        <p>Rocket</p>
      </ListItem>
      <ListItem>
        <span>✨</span>
        <p>Sparks</p>
      </ListItem>
    </List>
  );
};
```

## Recap

Composition helps us give back developers the control (see [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control)). They can customize and extend our component's behavior.

With this simple pattern, we can increase the modularity of our code.

In React, composition minimises [prop-drilling](https://kentcdodds.com/blog/prop-drilling) issue. It is a [powerful tool to consider before using context](https://epicreact.dev/one-react-mistake-thats-slowing-you-down/) to avoid passing down props deep in the tree.

## Extra resources

Component libraries that heavily uses composition:

- [MUI](https://mui.com/getting-started/usage/) (ex Material UI)
- [Chakra UI](https://chakra-ui.com/docs/getting-started)
