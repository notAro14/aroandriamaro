import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
// import Cover from "src/components/Cover"
import { Box, Card, Flex, Heading, Separator, Text } from "@radix-ui/themes"
import { MARKDOWN_COMPONENTS } from "src/components/Mdx"
import { format } from "src/utils/date"

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
  const {
    mdxString,
    // cover,
    title,
    pubDate: date,
    timeToRead,
  } = props
  const MDXComponent = useMemo(() => getMDXComponent(mdxString), [mdxString])
  return (
    <Flex asChild direction={"column"} gap={"4"}>
      <article>
        {/* {cover && (
        <Cover
        src={cover.src}
        alt={cover.alt}
        author={cover.author}
        originalUrl={cover.link}
        />
      )} */}
        <Flex direction={"column"} gap={"2"}>
          <Heading size={{ initial: "6", xs: "8" }}>{title}</Heading>
          <Flex gap={"2"} align={"center"}>
            <Text size={"1"}>{`${format(date, "MMMM do")}, ${format(
              date,
              "yyyy"
            )}`}</Text>
            <Separator orientation="vertical" />
            <Text size={"1"}>{timeToRead}</Text>
          </Flex>
        </Flex>
        <Card>
          <Box p={"2"}>
            <MDXComponent components={MARKDOWN_COMPONENTS} />
          </Box>
        </Card>
      </article>
    </Flex>
  )
}
