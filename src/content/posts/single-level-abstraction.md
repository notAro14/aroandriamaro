---
title: Single Level of Abstraction applied to React code
description: How to apply the SLA principle to improve React component code
pubDate: 2022-04-16
author: Aro Andriamaro
image:
  url: /covers/main.webp
  alt: Desk with computer desktop
tags: ["react", "clean code"]
---

## Principle statement

Single Level of Abstraction or _SLA_ is a clean code principle. It states that all code inside a function or a method must be at the same level of abstraction.

When a method or a function mixes different levels of abstraction, the code is harder to read and understand.

```ts
function signUp(email: string, password: string) {
  const user = db.user.findOne({ where: { email } });
  if (user) throw new Error("User already exists");

  const hashedPassword = hashPassword(password);

  const newUser = db.user.createOne({
    hashedPassword,
    email,
  });

  return newUser;
}
```

In the example above, the _signUp_ function mixes

- statements that verify if the passed email already exists in the database
- statements that insert a user in the database
- and a call to abstracted operations like _hashPassword_

When a reviewer read this code, he or she has to mentally group the statements that belong together. It is called [mental grouping](http://principles-wiki.net/glossary:mental_grouping).

To avoid mental grouping, we use the principle of single level of abstraction.

```ts
function doesUserAlreadyExist(email: string) {
  const user = db.user.findOne({ where: { email } });
  return user ? true : false;
}

function createUser(email: string, hashedPassword: string) {
  const user = db.user.createOne({
    hashedPassword,
    email,
  });
  return user;
}

function signUp({ email, password }) {
  if (doesUserAlreadyExist(email)) {
    throw new Error("User already exists");
  }

  const hashedPassword = hashPassword(password);
  const user = createUser(email, hashedPassword);
  return user;
}
```

Now, _signUp_ function is composed of functions of the same level of abstraction. A potential reviewer does not need to know the details of each function to understand the _signUp_ function.

## How to apply SLA to React code

We can apply this principle to React too, especially to the JSX part. Let's consider this example

```jsx
const BlogHomePage = ({ articles }) => {
  return (
    <>
      <SEO />
      <main>
        <header>
          <h1>My blog</h1>
          <p>Welcome to my blog</p>
        </header>
        <ul>
          {articles.map((article) => (
            <ArticlePreview key={title} article={article} />
          ))}
        </ul>
      </main>
    </>
  );
};
```

In this simple example, the component _BlogHomePage_ is somewhat readable. But still it requires extra effort to mentally visualize to what elements this component renders.

We could refactor this component like so

```jsx
const Header = () => (
  <header>
    <h1>My blog</h1>
    <p>Welcome to my blog</p>
  </header>
);

const Articles = ({ articles }) => (
  <ul>
    {articles.map((article) => (
      <ArticlePreview key={title} article={article} />
    ))}
  </ul>
);

const BlogHomePage = ({ articles }) => {
  return (
    <>
      <SEO />
      <main>
        <Header />
        <Articles articles={articles} />
      </main>
    </>
  );
};
```

This way, we can easily visualize all the different parts of _BlogHomePage_ at once.

## Caveats

The only caveat of the _SLA_ principle is that it can result in the creation of multiple functions, or mulitple components in React.

And there is also the risk of creating the wrong abstraction. Thus resulting in [mental inlining](http://principles-wiki.net/glossary:mental_inlining) : the opposite of mental grouping.
