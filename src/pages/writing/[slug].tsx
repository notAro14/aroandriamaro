/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, FC } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { ParsedUrlQuery } from "querystring"

import { format } from "src/utils/date"
import { getAllArticles, getSingleArticle } from "src/utils/mdx"
import { NextPageWithLayout } from "src/types"

import Flex from "src/ui/flex"
import Heading from "src/ui/heading"
import Link from "src/ui/link"
import SyntaxHighlighter from "src/components/code"
import Text from "src/ui/text"
import Emoji from "src/components/emoji"
import PageHeading from "src/components/page-heading"
import { theme } from "src/ui/stitches.config"

const components = {
  code: SyntaxHighlighter,
  h1: (props: any) => (
    <Heading
      as="h1"
      css={{
        marginBottom: theme.space.md,
        marginTop: theme.space.xl,
        fontSize: theme.fontSizes["2xl"],
        "@bp2": {
          fontSize: theme.fontSizes["3xl"],
        },
        "@bp3": {
          fontSize: theme.fontSizes["3xl"],
        },
      }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      css={{
        marginBottom: theme.space.md,
        marginTop: theme.space.xl,
        fontSize: theme.fontSizes.xl,
        "@bp2": {
          fontSize: theme.fontSizes["2xl"],
        },
        "@bp3": {
          fontSize: theme.fontSizes["2xl"],
        },
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      as="h3"
      css={{
        marginBottom: theme.space.md,
        marginTop: theme.space.xl,
        fontSize: theme.fontSizes.lg,
        "@bp2": {
          fontSize: theme.fontSizes.xl,
        },
        "@bp3": {
          fontSize: theme.fontSizes.xl,
        },
      }}
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      as="h4"
      css={{
        marginBottom: theme.space.md,
        marginTop: theme.space.xl,
        fontSize: theme.fontSizes.lg,
      }}
      {...props}
    />
  ),
  p: (props: any) => (
    <Text
      css={{
        marginTop: theme.space.md,
        marginBottom: theme.space.md,
      }}
      {...props}
    />
  ),
  em: (props: any) => (
    <Text
      as="em"
      css={{
        color: "$text-lo",
        fontFamily: theme.fonts.primary,
      }}
      {...props}
    />
  ),
  a: (props: any) => (
    <Link
      href={props.href}
      css={{
        color: "$text-lo",
        fontWeight: 200,
      }}
      {...props}
    />
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
        color: "$text-functional",
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
        gap: "$md",
        color: "$text-vibrant",
        backgroundColor: "$ui",
        alignItems: "center",
        padding: "$xs $xl",
        borderRadius: "$lg",
        justifyContent: "center",
        fontSize: theme.fontSizes.md,
        boxShadow: "$low",
        fontWeight: 100,
        width: "fit-content",
        margin: "0 auto $2xl auto",
        fontFamily: "$primary",
        userSelect: "none",
        "&:hover": {
          backgroundColor: "$ui-hovered",
        },
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
      <DateAndTimeToRead date={frontmatter.date} timeToRead={timeToRead.text} />
      <PageHeading as="h1">{frontmatter.title}</PageHeading>
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
