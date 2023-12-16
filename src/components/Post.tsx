import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import Image from "next/image"
import {
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Text,
  Inset,
} from "@radix-ui/themes"
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
  const { mdxString, cover, title, pubDate: date, timeToRead } = props
  const MDXComponent = useMemo(() => getMDXComponent(mdxString), [mdxString])
  return (
    <Card asChild>
      <article>
        <Flex direction={"column"} gap={"4"}>
          {cover && (
            <Inset clip="padding-box" side="top" pb="current">
              <Box
                position={"relative"}
                display={"block"}
                style={{ height: 250 }}
              >
                <Image
                  src={cover.src}
                  style={{ objectFit: "cover" }}
                  fill
                  alt={cover.alt}
                />
              </Box>
            </Inset>
          )}
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
          <Box>
            <MDXComponent components={MARKDOWN_COMPONENTS} />
          </Box>
        </Flex>
      </article>
    </Card>
  )
}
