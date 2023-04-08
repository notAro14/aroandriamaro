import { FC } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import Anchor from "src/component/Anchor/Anchor"
import Text from "src/component/Text"
import Flex from "src/component/Flex"

import { format } from "src/utils/date"
import * as styles from "./ArticlePreview.css"

interface Props {
  slug: string
  title: string
  description: string
  date: string
}

const ArticlePreview: FC<Props> = ({ slug, title, description, date }) => {
  return (
    <article>
      <Flex direction="column" align="start">
        <Text color="functional-low" as="small" size="sm">
          {format(date, "MMMM do, yyyy")}
        </Text>
        <h2 className={styles.articleTitle}>{title}</h2>
      </Flex>
      <Flex direction="column" gap="sm" align="start">
        <Text>{description}</Text>
        <Anchor href={`/writing/${slug}`}>
          <span className={styles.articleReadMore}>
            Read more
            <ArrowRightIcon />
          </span>
        </Anchor>
      </Flex>
    </article>
  )
}

export default ArticlePreview
