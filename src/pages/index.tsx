import type { InferGetStaticPropsType } from "next"
import Head from "next/head"

import { getAllArticles } from "src/utils/mdx"
import type { NextPageWithLayout } from "src/types"
// components
import Text from "src/component/Text"
import Emoji from "src/component/emoji"
import ArticleList from "src/component/ArticleList"
import Heading from "src/component/Heading"
import Spacer from "src/component/Spacer"
import { FC, ReactNode } from "react"

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

const StrikedText: FC<{ children: ReactNode }> = ({ children }) => (
  <Text as="span" decoration="line-through">
    {children}
  </Text>
)

const Header = () => {
  return (
    <header>
      <Heading as="h1" color="functional" size="xl">
        <Emoji symbol="👋" ariaLabel="waving hand" />
        <span> Yeahh buddyyy</span>
      </Heading>
      <Spacer size="lg" />
      <Text>
        Welcome to <StrikedText>this yet another tech blog</StrikedText> my
        personal website. My name is Aro, I&apos;m a Web Developer based in
        Lyon, France.
      </Text>
      <Spacer />
      <Text>
        This is my attempt to{" "}
        <StrikedText>build a personal branding</StrikedText> make the world a
        better place. I write mostly about <StrikedText>React</StrikedText> Web
        Development.
      </Text>
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
