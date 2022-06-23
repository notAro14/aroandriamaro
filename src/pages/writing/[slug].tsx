/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, FC } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { ParsedUrlQuery } from "querystring"

import { format } from "utils/date"
import { getAllArticles, getSingleArticle } from "utils/mdx"
import { NextPageWithLayout } from "types"

import Flex from "shared/flex"
import Heading from "shared/heading"
import Link from "shared/link"
import SyntaxHighlighter from "features/code"
import Text from "shared/text"
import Emoji from "features/emoji"
import PageHeading from "features/page-heading"
import { theme } from "lib/stitches.config"

const components = {
  code: SyntaxHighlighter,
  h1: (props: any) => (
    <Heading as="h1" mb={4} mt={6} fontSize={["2xl", "3xl"]} {...props} />
  ),
  h2: (props: any) => (
    <Heading mb={4} mt={6} fontSize={["xl", "2xl"]} {...props} />
  ),
  h3: (props: any) => (
    <Heading as="h3" mb={4} mt={6} fontSize={["lg", "xl"]} {...props} />
  ),
  h4: (props: any) => (
    <Heading as="h4" mb={4} mt={6} fontSize={"lg"} {...props} />
  ),
  p: (props: any) => <Text color="text" my={4} lineHeight="1.65" {...props} />,
  em: (props: any) => (
    <Text as="em" color="brand" fontFamily="primary" {...props} />
  ),
  a: (props: any) => (
    <Link href={props.href} color="brand" fontWeight={200} {...props} />
  ),
  ul: (props: any) => (
    <Flex
      as="ul"
      css={{
        fontSize: theme.fontSizes.lg,
        fontFamily: theme.fonts.primary,
        fontWeight: 200,
        flexDirection: "column",
        listStyleType: "disc",
        color: theme.colors.text,
        gap: theme.space.xs,
        paddingLeft: theme.space.md,
        marginTop: theme.space.md,
        marginBottom: theme.space.md,
      }}
      {...props}
    />
  ),
}

interface Props {
  post: Awaited<ReturnType<typeof getSingleArticle>>
  slug: string
}

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[] | string
  pageUrl: string
}

const SEO: FC<SEOProps> = ({ title, description, keywords, pageUrl }) => {
  const ogImage = "https://aroandriamaro.com/images/social.jpg"
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={typeof keywords === "string" ? keywords : keywords?.join(", ")}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  )
}

interface DateAndTimeToReadProps {
  date: string
  timeToRead: string
}

const DateAndTimeToRead: FC<DateAndTimeToReadProps> = ({
  date,
  timeToRead,
}) => {
  return (
    <Flex
      as="p"
      css={{
        gap: theme.space.sm,
        color: theme.colors.gray,
        fontSize: theme.fontSizes.md,
        fontWeight: 100,
        fontFamily: theme.fonts.primary,
      }}
    >
      <Emoji symbol="📅" ariaLabel="calendar" />
      {`${format(date, "MMMM do")}, ${format(date, "yyyy")} - ${timeToRead}`}
    </Flex>
  )
}

const Post: NextPageWithLayout<Props> = ({ post, slug }) => {
  const { code, frontmatter, timeToRead } = post
  const MDXComponent = useMemo(() => getMDXComponent(code), [code])
  const pageUrl = `https://aroandriamaro.com/writing/${slug}`

  return (
    <article>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords="javascript, typescript, react, react.js, next, next.js"
        pageUrl={pageUrl}
      />
      <PageHeading as="h1">{frontmatter.title}</PageHeading>
      <DateAndTimeToRead date={frontmatter.date} timeToRead={timeToRead.text} />
      <MDXComponent components={components} />
    </article>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  // https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
  const { slug } = context.params as Params
  const post = await getSingleArticle(slug)
  return {
    props: { post, slug },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticles({ sorted: false }).map(({ slug }) => ({
    params: { slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default Post
