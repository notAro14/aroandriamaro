import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import Cover from "src/component/Cover"
import DateTimeToRead from "src/component/DateTimeToRead"
import Heading from "src/component/Heading"
import { MARKDOWN_COMPONENTS } from "src/component/Mdx"

interface Props {
  mdxString: string
  pubDate: string
  timeToRead: string
  title: string
  cover:
    | {
        author: string
        src: string
        alt: string
        link: string
      }
    | null
    | undefined
}

export default function Post(props: Props) {
  const { mdxString, cover, title, pubDate, timeToRead } = props
  const MDXComponent = useMemo(() => getMDXComponent(mdxString), [mdxString])
  return (
    <article>
      {cover && (
        <Cover
          src={cover.src}
          alt={cover.alt}
          author={cover.author}
          originalUrl={cover.link}
        />
      )}
      <Heading as="h1" color="functional" size="2xl">
        {title}
      </Heading>
      <DateTimeToRead date={pubDate} timeToRead={timeToRead} />
      <MDXComponent components={MARKDOWN_COMPONENTS} />
    </article>
  )
}
