import { FC } from "react"
import NextLink from "next/link"

import Box from "src/ui/box"
import Heading from "src/ui/heading"
import Link from "src/ui/link"
import Text from "src/ui/text"
import { format } from "src/utils/date"
import { theme } from "src/ui/stitches.config"

interface ArticlePreviewProps {
  slug: string
  title: string
  description: string
  date: string
}

const ArticlePreview: FC<ArticlePreviewProps> = ({
  slug,
  title,
  description,
  date,
}) => {
  return (
    <NextLink href={`/writing/${slug}`} passHref>
      <Link
        title={title}
        css={{
          fontSize: "inherit",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Box
          as="article"
          css={{
            marginBottom: theme.space.xl,
            padding: theme.space.md,
            borderRadius: "$lg",
            backgroundColor: "$ui",
            "&:hover": {
              backgroundColor: "$ui-hovered",
            },
          }}
        >
          <Text
            css={{
              marginBottom: theme.space.xs,
              color: "$text-hi-gray",
              fontSize: theme.fontSizes.xs,
            }}
          >
            {format(date, "MMMM do, yyyy")}
          </Text>
          <Heading
            css={{
              fontWeight: 500,
              marginBottom: theme.space.xxs,
              fontSize: theme.fontSizes["2xl"],
            }}
          >
            {title}
          </Heading>
          <Text css={{ marginBottom: theme.space.xs }}>{description}</Text>
          <Text css={{ color: "$text-lo" }}>Read more</Text>
        </Box>
      </Link>
    </NextLink>
  )
}

export default ArticlePreview
