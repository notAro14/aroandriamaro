import type { InferGetStaticPropsType } from "next"
import Head from "next/head"

import { getAllArticles } from "utils/mdx"
import type { NextPageWithLayout } from "types"
import { theme } from "lib/stitches.config"
// components
import ArticlePreview from "features/article-preview"
import PageHeading from "features/page-heading"
import Text from "shared/text"
import Emoji from "features/emoji"
import Box from "shared/box"
import Flex from "shared/flex"
import Link from "shared/link"
import { SOCIAL_LINKS } from "shared/layout/footer/footer"
import { FC } from "react"

export const getStaticProps = () => {
  const articles = getAllArticles({ sorted: true })
  return {
    props: {
      articles,
    },
  }
}

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>

const SEO = () => {
  return (
    <Head>
      <title>Aro Andriamaro</title>
      <meta
        name="description"
        content="Blog about tech and web developement. It focuses on React and frontend development."
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
    <Box
      as="header"
      css={{
        borderBottom: "1px solid",
        borderBottomColor: theme.colors.border,
        paddingBottom: theme.space.lg,
        marginBottom: theme.space.lg,
      }}
    >
      <PageHeading as="h1">
        Welcome, Bienvenue, Tongasoa{" "}
        <Emoji symbol="👋🏼" ariaLabel="waving hand" />
      </PageHeading>
      <Text css={{ marginBottom: theme.space.md }}>
        Welcome to my blog (yet another dev blog) . My name is Aro, I am a
        Frontend Developer based in Lyon, France.
      </Text>
      <Text css={{ marginBottom: theme.space.md }}>
        This blog is my attempt to make the world a better place by sharing my
        modest knowledge in Web development. I write mostly about Frontend dev
        and React.
      </Text>
      <Flex
        as="ul"
        css={{
          gap: theme.space.md,
          flexWrap: "wrap",
        }}
      >
        {SOCIAL_LINKS.map(({ name, href, Component }) => {
          return (
            <Flex
              as="li"
              key={name}
              css={{
                alignItems: "center",
                color: theme.colors.text,
                gap: theme.space.xs,
                backgroundColor: theme.colors.compBg,
                borderRadius: 9999,
                paddingTop: theme.space.xxs,
                paddingBottom: theme.space.xxs,
                paddingLeft: theme.space.xs,
                paddingRight: theme.space.xs,
              }}
            >
              <Component />
              <Link
                href={href}
                css={{
                  textDecoration: "none",
                  fontWeight: 200,
                  fontSize: theme.fontSizes.md,
                  color: theme.colors.text,
                }}
              >
                {name}
              </Link>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

interface BlogArticlesProps {
  articles: InferGetStaticPropsType<typeof getStaticProps>["articles"]
}

const BlogArticles: FC<BlogArticlesProps> = ({ articles }) => {
  return (
    <Flex
      as="ul"
      css={{
        flexDirection: "column",
        gap: theme.space.md,
      }}
    >
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
    </Flex>
  )
}

const IndexPage: NextPageWithLayout<IndexPageProps> = (props) => {
  const { articles } = props
  return (
    <>
      <SEO />
      <Header />
      <BlogArticles articles={articles} />
    </>
  )
}

export default IndexPage
