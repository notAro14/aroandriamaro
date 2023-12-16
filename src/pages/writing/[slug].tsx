import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"

import { getAllArticles, getSingleArticle } from "src/utils/mdx"
import Post from "src/components/Post"

interface Props {
  post: Awaited<ReturnType<typeof getSingleArticle>>
  slug: string
}

export default function Page({ post, slug }: Props) {
  const { code, frontmatter, timeToRead } = post
  const { coverAuthor, coverImage, coverAlt, coverUrl, title, description } =
    frontmatter
  const url = `https://aroandriamaro.com/writing/${slug}`
  const cover =
    coverAuthor && coverImage && coverAlt && coverUrl
      ? {
          author: coverAuthor,
          alt: coverAlt,
          link: coverUrl,
          src: coverImage,
        }
      : null

  const ogImage = "https://aroandriamaro.com/images/social.jpg"
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="javascript, typescript, react, react.js, next, next.js"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <Post
        mdxString={code}
        cover={cover}
        title={frontmatter.title}
        pubDate={frontmatter.date}
        timeToRead={timeToRead.text}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug
  if (typeof slug === "string") {
    const post = await getSingleArticle(slug)
    return {
      props: { post, slug },
    }
  }
  throw new Error("Unknown context.params.slug")
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
