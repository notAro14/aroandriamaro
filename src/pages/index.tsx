import type { InferGetStaticPropsType } from "next"
import Head from "next/head"

import { getAllArticles } from "src/utils/mdx"
import type { NextPageWithLayout } from "src/types"
// components
import PageHeading from "src/components/page-heading"
import Text from "src/ui/text"
import Emoji from "src/components/emoji"
import Box from "src/ui/box"
import Link from "src/ui/link"
import { SOCIAL_LINKS, URL_TO_SPRITE } from "src/constants"
import Svg from "src/ui/svg"
import HStack from "src/ui/h-stack"
import Pill from "src/ui/pill"
import ListOfArticles from "src/components/list-of-articles"

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
        borderBottomColor: "$line",
        paddingBottom: "$lg",
        marginBottom: "$lg",
      }}
    >
      <PageHeading as="h1" color="vibrant-low">
        Welcome, Bienvenue, Tongasoa{" "}
        <Emoji symbol="👋🏼" ariaLabel="waving hand" />
      </PageHeading>
      <Text css={{ marginBottom: "$md" }}>
        Welcome to my blog (yet another dev blog) . My name is Aro, I am a
        Frontend Developer based in Lyon, France.
      </Text>
      <Text css={{ marginBottom: "$md" }}>
        This blog is my attempt to make the world a better place by sharing my
        modest knowledge in Web development. I write mostly about Frontend dev
        and React.
      </Text>
      <HStack as="ul" spacing="md">
        {SOCIAL_LINKS.map(({ name, href }) => {
          return (
            <Pill as="li" key={name}>
              <Svg>
                <use href={`${URL_TO_SPRITE}#${name}`} />
              </Svg>
              <Link
                href={href}
                noUnderline
                css={{
                  fontSize: "$md",
                  color: "$text-hi",
                }}
              >
                {name}
              </Link>
            </Pill>
          )
        })}
      </HStack>
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
      <ListOfArticles articles={articles} />
    </>
  )
}

export default IndexPage
