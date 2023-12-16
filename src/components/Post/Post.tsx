import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import Cover from "src/components/Cover"
import DateTimeToRead from "src/components/DateTimeToRead"
import Heading from "src/components/Heading"
import { MARKDOWN_COMPONENTS } from "src/components/Mdx"

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
      <Heading as="h1" color="functional" size="xl">
        {title}
      </Heading>
      <DateTimeToRead date={pubDate} timeToRead={timeToRead} />
      <MDXComponent components={MARKDOWN_COMPONENTS} />
    </article>
  )
}
