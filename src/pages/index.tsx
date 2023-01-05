import type { InferGetStaticPropsType } from "next"
import Head from "next/head"

import { getAllArticles } from "src/utils/mdx"
import type { NextPageWithLayout } from "src/types"
// components
import Text from "src/ui/text"
import Emoji from "src/components/emoji"
import Box from "src/ui/box"
import ListOfArticles from "src/components/list-of-articles"
import Heading from "src/ui/heading"
import Spacer from "src/components/spacer"
import { theme, css } from "src/themes/stitches.config"
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
      <title>Aro&apos;s tech blog</title>
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

const StrikedText: FC<{ children: ReactNode; title?: string }> = ({
  children,
  title,
}) => (
  <Text as="span" css={{ textDecoration: "line-through" }} title={title}>
    {children}
  </Text>
)

const Header = () => {
  return (
    <Box as="header">
      <Heading as="h1" color="functional" size="2xl">
        <Emoji
          className={css({ marginRight: theme.space.sm })()}
          symbol="👋🏼"
          ariaLabel="waving hand"
        />
        <span>Welcome, Bienvenue, Tongasoa</span>
      </Heading>
      <Spacer />
      <Text>
        Welcome to this <StrikedText>yet another</StrikedText> tech blog. My
        name is Aro, I&apos;m a Web Developer based in Lyon, France.
      </Text>
      <Spacer />
      <Text>
        This blog is my attempt to{" "}
        <StrikedText>build a personal branding</StrikedText> make the world a
        better place. I write mostly about{" "}
        <StrikedText title="HAIL DAN !!!">React</StrikedText> Web Development.
      </Text>
    </Box>
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
      <ListOfArticles articles={articles} />
    </>
  )
}

export default IndexPage
