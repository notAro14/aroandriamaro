import { FC } from "react"
import NextLink from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { format } from "src/utils/date"
import {
  ArticleContainer,
  ArticleDate,
  ArticleDescription,
  ArticleLink,
  ArticleReadMore,
  ArticleTitle,
} from "./article-preview.styles"

interface Props {
  slug: string
  title: string
  description: string
  date: string
}

const ArticlePreview: FC<Props> = ({ slug, title, description, date }) => {
  return (
    <NextLink href={`/writing/${slug}`} passHref>
      <ArticleLink title={title}>
        <ArticleContainer>
          <ArticleDate>{format(date, "MMMM do, yyyy")}</ArticleDate>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDescription>{description}</ArticleDescription>
          <ArticleReadMore>
            <span>Read more</span>
            <ArrowRightIcon />
          </ArticleReadMore>
        </ArticleContainer>
      </ArticleLink>
    </NextLink>
  )
}

export default ArticlePreview
