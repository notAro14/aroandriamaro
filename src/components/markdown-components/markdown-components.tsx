import List from "src/ui/list"
import Heading from "src/ui/heading"
import Link from "src/ui/link"
import CodeBlock from "src/components/code-block"
import Text from "src/ui/text"
import { styled } from "src/themes/stitches.config"

type HeadingProps = Parameters<typeof Heading>[0]
type TextProps = Parameters<typeof Text>[0]
type LinkProps = Parameters<typeof Link>[0]
type ListProps = Parameters<typeof List>[0]

const MDXHeading = styled(Heading, {
  marginBottom: "$md",
  marginTop: "$xl",
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

const MDXParagraph = styled(Text, {
  marginTop: "$md",
  marginBottom: "$md",
})

const MDXEm = styled((props: TextProps) => <Text as="em" {...props} />, {
  color: "$text-lo",
  fontFamily: "$primary",
})

const MDXLink = styled(
  (props: LinkProps) => (
    <Link target="_blank" rel="noopener noreferrer" {...props} />
  ),
  {
    color: "$text-lo",
    fontWeight: 200,
  }
)

const MDXList = styled(
  (props: ListProps) => <List as="ul" spacing="xs" {...props} />,
  {
    fontSize: "$lg",
    fontFamily: "$primary",
    fontWeight: 200,
    listStyleType: "disc",
    color: "$text-functional",
    paddingLeft: "$md",
    marginTop: "$md",
    marginBottom: "$md",
  }
)

export const MARKDOWN_COMPONENTS = {
  code: CodeBlock,
  h1: (props: HeadingProps) => <MDXHeading as="h1" fontSize="2xl" {...props} />,
  h2: (props: HeadingProps) => <MDXHeading as="h2" fontSize="xl" {...props} />,
  h3: (props: HeadingProps) => <MDXHeading as="h3" fontSize="lg" {...props} />,
  h4: (props: HeadingProps) => <MDXHeading as="h4" fontSize="lg" {...props} />,
  p: MDXParagraph,
  em: MDXEm,
  a: MDXLink,
  ul: MDXList,
}

export default MARKDOWN_COMPONENTS
