import type { InferGetStaticPropsType } from "next"
import Head from "next/head"
import { Flex } from "@radix-ui/themes"

import { getAllArticles } from "src/utils/mdx"
import type { NextPageWithLayout } from "src/types"
import ArticlePreview from "src/components/ArticlePreview"

const IndexPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const { articles } = props
  return (
    <>
      <Head>
        <title>Aro Andriamaro</title>
        <meta
          name="description"
          content="Another tech blog about React and Frontend dev."
        />
        <meta
          name="keywords"
          content="Javascript, Typescript, React, Next, CSS, Frameworks"
        />
      </Head>
      <Flex direction={"column"} gap={"6"}>
        {articles.map(
          ({
            frontmatter: {
              title,
              description,
              date,
              coverUrl,
              coverImage,
              coverAlt,
              coverAuthor,
            },
            slug,
          }) => {
            const cover =
              coverAuthor && coverImage && coverAlt && coverUrl
                ? {
                    author: coverAuthor,
                    alt: coverAlt,
                    link: coverUrl,
                    src: coverImage,
                  }
                : null
            return (
              <ArticlePreview
                key={slug}
                date={date}
                slug={slug}
                title={title}
                description={description}
                cover={cover}
              />
            )
          }
        )}
      </Flex>
    </>
  )
}

export default IndexPage

export const getStaticProps = () => {
  const articles = getAllArticles({ sorted: true })
  return {
    props: {
      articles,
    },
  }
}
