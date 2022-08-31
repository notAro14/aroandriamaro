import List from "src/ui/list"
import Heading from "src/ui/heading"
import Link from "src/ui/link"
import CodeBlock from "src/components/code-block"
import Text from "src/ui/text"

type HeadingProps = Parameters<typeof Heading>[0]
type TextProps = Parameters<typeof Text>[0]
type LinkProps = Parameters<typeof Link>[0]
type ListProps = Parameters<typeof List>[0]

export const MARKDOWN_COMPONENTS = {
  code: CodeBlock,
  h1: (props: HeadingProps) => (
    <Heading
      as="h1"
      css={{
        marginBottom: "$md",
        marginTop: "$xl",
        fontSize: "$2xl",
      }}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <Heading
      as="h2"
      css={{
        marginBottom: "$md",
        marginTop: "$xl",
        fontSize: "$xl",
      }}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <Heading
      as="h3"
      css={{
        marginBottom: "$md",
        marginTop: "$xl",
        fontSize: "$lg",
      }}
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <Heading
      as="h4"
      css={{
        marginBottom: "$md",
        marginTop: "$xl",
        fontSize: "$lg",
      }}
      {...props}
    />
  ),
  p: (props: TextProps) => (
    <Text
      css={{
        marginTop: "$md",
        marginBottom: "$md",
      }}
      {...props}
    />
  ),
  em: (props: TextProps) => (
    <Text
      as="em"
      css={{
        color: "$text-lo",
        fontFamily: "$primary",
      }}
      {...props}
    />
  ),
  a: (props: LinkProps) => (
    <Link
      href={props.href}
      css={{
        color: "$text-lo",
        fontWeight: 200,
      }}
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <List
      as="ul"
      spacing="xs"
      css={{
        fontSize: "$lg",
        fontFamily: "$primary",
        fontWeight: 200,
        listStyleType: "disc",
        color: "$text-functional",
        paddingLeft: "$md",
        marginTop: "$md",
        marginBottom: "$md",
      }}
      {...props}
    />
  ),
}

export default MARKDOWN_COMPONENTS
