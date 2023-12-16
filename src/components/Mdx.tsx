import type { MDXContentProps } from "mdx-bundler/client"
import CodeBlock from "src/components/CodeBlock"
import { Link, Text, Heading, Strong, Em } from "@radix-ui/themes"

export const MARKDOWN_COMPONENTS: MDXContentProps["components"] = {
  code: (props) =>
    typeof props.children === "string" ? (
      <CodeBlock {...props}>{props.children}</CodeBlock>
    ) : null,
  h1: ({ children }) => (
    <Heading my={"6"} size={"8"} as="h1">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading my={"6"} size={"7"} as="h2">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading my={"6"} size={"7"} as="h3">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading my={"6"} size={"6"} as="h4">
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading my={"6"} size={"6"} as="h5">
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading my={"6"} size={"6"} as="h6">
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text my={"4"} as="p">
      {children}
    </Text>
  ),
  em: ({ children }) => <Em>{children}</Em>,
  b: ({ children }) => <Strong>{children}</Strong>,
  a: ({ children, href }) => (
    <Link href={href} target="_blank" rel="noreferrer">
      {children}
    </Link>
  ),
}

export default MARKDOWN_COMPONENTS
