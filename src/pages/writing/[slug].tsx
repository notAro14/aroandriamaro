import { useMemo, FC } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { ParsedUrlQuery } from "querystring"

import { getAllArticles, getSingleArticle } from "src/utils/mdx"
import { NextPageWithLayout } from "src/types"
import { MARKDOWN_COMPONENTS } from "src/component/Mdx"
import DateTimeToRead from "src/component/DateTimeToRead"
import Heading from "src/component/Heading"
import Cover from "src/component/Cover"

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

const Post: NextPageWithLayout<Props> = ({ post, slug }) => {
  const { code, frontmatter, timeToRead } = post
  const { coverAuthor, coverImage, coverAlt, coverUrl } = frontmatter
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
      {coverAuthor && coverImage && coverAlt && coverUrl && (
        <Cover
          src={coverImage}
          alt={coverAlt}
          author={coverAuthor}
          originalUrl={coverUrl}
        />
      )}
      <Heading as="h1" color="functional" size="2xl">
        {frontmatter.title}
      </Heading>
      <DateTimeToRead date={frontmatter.date} timeToRead={timeToRead.text} />
      <MDXComponent components={MARKDOWN_COMPONENTS} />
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
