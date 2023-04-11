import { FC } from "react"

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
    <article className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.articleTitle}>
          <a className={styles.articleTitleLink} href={`/writing/${slug}`}>
            {" "}
            {title}
          </a>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>
      <small className={styles.pubDate}>{format(date, "MMMM do, yyyy")}</small>
    </article>
  )
}

export default ArticlePreview
