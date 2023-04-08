import { FC } from "react"
import NextLink from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { format } from "src/utils/date"
import {
  ArticleContainer,
  ArticleDate,
  ArticleDescription,
  ArticleReadMore,
  ArticleTitle,
} from "./article-preview.styles"
import link from "src/ui/link"

interface Props {
  slug: string
  title: string
  description: string
  date: string
}

const ArticlePreview: FC<Props> = ({ slug, title, description, date }) => {
  return (
    <NextLink
      className={link({
        css: {
          fontSize: "inherit",
          textDecoration: "none",
          color: "inherit",
        },
      })}
      href={`/writing/${slug}`}
      passHref
    >
      <ArticleContainer>
        <ArticleDate>{format(date, "MMMM do, yyyy")}</ArticleDate>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{description}</ArticleDescription>
        <ArticleReadMore>
          <span>Read more</span>
          <ArrowRightIcon />
        </ArticleReadMore>
      </ArticleContainer>
    </NextLink>
  )
}

export default ArticlePreview
