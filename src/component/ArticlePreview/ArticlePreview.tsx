import { FC } from "react"

import Text from "src/component/Text"
import { flex } from "src/component/Flex/Flex.css"

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
    <article className={flex({ direction: "column", gap: "sm" })}>
      <div className={flex({ direction: "column" })}>
        <h2 className={styles.articleTitle}>
          <a className={styles.articleTitleLink} href={`/writing/${slug}`}>
            {" "}
            {title}
          </a>
        </h2>
        <Text>{description}</Text>
      </div>
      <Text color="vibrant-low" as="small" size="sm">
        {format(date, "MMMM do, yyyy")}
      </Text>
    </article>
  )
}

export default ArticlePreview
