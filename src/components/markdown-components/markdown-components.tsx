import type { MDXContentProps } from "mdx-bundler/client"
import Heading from "src/ui/heading"
import Link from "src/ui/link"
import CodeBlock from "src/components/code-block"
import Text from "src/ui/text"
import { css, theme } from "src/themes/stitches.config"

export const MDXHeading = css(Heading, {
  marginBottom: theme.space.xl,
  marginTop: theme.space["2xl"],
  variants: {
    fontSize: {
      "2xl": {
        fontSize: "$2xl",
      },
      xl: {
        fontSize: "$xl",
      },
      lg: {
        fontSize: "$lg",
      },
    },
  },
})

export const MDXParagraph = css(Text, {
  marginTop: theme.space.xl,
  marginBottom: theme.space.xl,
})

export const MDXEm = css(
  (props: Parameters<typeof Text>[0]) => <Text as="em" {...props} />,
  {
    color: "$text-lo",
    fontFamily: "$primary",
  }
)

export const MDXLink = css(
  (props: Parameters<typeof Link>[0]) => (
    <Link target="_blank" rel="noopener noreferrer" {...props} />
  ),
  {
    color: "$text-lo",
    fontWeight: 200,
  }
)
export const MDXList = css("ul", {
  display: "flex",
  flexDirection: "column",
  gap: theme.space.sm,
  fontSize: "$lg",
  fontFamily: "$primary",
  fontWeight: 200,
  color: "$text-functional",
  paddingLeft: "$md",
  marginTop: "$md",
  marginBottom: "$md",
  listStyleType: "disc",
  "& > li": {
    lineHeight: 1.3,
  },
})

export const MARKDOWN_COMPONENTS: MDXContentProps["components"] = {
  code: (props) => <CodeBlock {...props}>{props.children as string}</CodeBlock>,
  h1: (props) => (
    <h1
      className={MDXHeading({
        fontSize: "2xl",
      })}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className={MDXHeading({
        fontSize: "xl",
      })}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={MDXHeading({
        fontSize: "lg",
      })}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className={MDXHeading({
        fontSize: "lg",
      })}
      {...props}
    />
  ),
  p: (props) => <p className={MDXParagraph()} {...props} />,
  em: (props) => <em className={MDXEm()} {...props} />,
  a: (props) => <a className={MDXLink()} {...props} />,
  ul: (props) => <ul className={MDXList()} {...props} />,
}

export default MARKDOWN_COMPONENTS
