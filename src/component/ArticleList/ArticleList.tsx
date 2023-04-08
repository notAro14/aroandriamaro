import type { FC } from "react"

import ArticlePreview from "src/component/ArticlePreview"
import type { Articles } from "src/types"
import * as styles from "./ArticleList.css"

interface Props {
  articles: Articles
}

const ListOfArticles: FC<Props> = ({ articles }) => {
  return (
    <ul className={styles.articleList}>
      {articles.map(({ frontmatter: { title, description, date }, slug }) => (
        <li key={slug}>
          <ArticlePreview
            date={date}
            slug={slug}
            title={title}
            description={description}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListOfArticles
