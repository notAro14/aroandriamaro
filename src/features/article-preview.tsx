import { FC } from "react"
import NextLink from "next/link"

import Box from "shared/box"
import Heading from "shared/heading"
import Link from "shared/link"
import Text from "shared/text"
import { format } from "utils/date"
import { theme } from "lib/stitches.config"

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
            borderRadius: theme.radii.md,
            backgroundColor: theme.colors.compBg,
          }}
        >
          <Text
            css={{
              marginBottom: theme.space.xs,
              color: theme.colors.gray,
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
          <Text css={{ color: theme.colors.brand }}>Read more</Text>
        </Box>
      </Link>
    </NextLink>
  )
}

export default ArticlePreview
