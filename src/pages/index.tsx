import type { InferGetStaticPropsType } from "next"
import Head from "next/head"

import { getAllArticles } from "src/utils/mdx"
import type { NextPageWithLayout } from "src/types"
// components
import Text from "src/component/Text"
import ArticleList from "src/component/ArticleList"
import Heading from "src/component/Heading"
import Spacer from "src/component/Spacer"

export const getStaticProps = () => {
  const articles = getAllArticles({ sorted: true })
  return {
    props: {
      articles,
    },
  }
}

const SEO = () => {
  return (
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
  )
}

const Header = () => {
  return (
    <header>
      <Heading as="h1" color="functional" size="xl">
        Aro ANDRIAMARO
      </Heading>
      <Text weigth="bold" color="vibrant-low" as="small" size="sm">
        Full Stack Developer
      </Text>
      <Spacer size="lg" />
    </header>
  )
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const IndexPage: NextPageWithLayout<Props> = (props) => {
  const { articles } = props
  return (
    <>
      <SEO />
      <Header />
      <Spacer size="2xl" />
      <ArticleList articles={articles} />
    </>
  )
}

export default IndexPage
