import type { FC } from "react"

import List from "src/ui/list"
import ArticlePreview from "src/components/article-preview"
import type { Articles } from "src/types"

interface Props {
  articles: Articles
}

const ListOfArticles: FC<Props> = ({ articles }) => {
  return (
    <List>
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
    </List>
  )
}

export default ListOfArticles
