import { FC } from "react"
import Link from "next/link"

import { format } from "src/utils/date"
import { Box, Card, Flex, Heading, Inset, Text } from "@radix-ui/themes"
import Image from "next/image"

interface Props {
  slug: string
  title: string
  description: string
  date: string
  cover: {
    author: string
    src: string
    alt: string
    link: string
  } | null
}

const ArticlePreview: FC<Props> = ({
  slug,
  title,
  description,
  date,
  cover,
}) => {
  return (
    <Card asChild>
      <Link href={`/writing/${slug}`}>
        {cover && (
          <Inset clip="padding-box" side="top" pb="current">
            <Box
              position={"relative"}
              display={"block"}
              style={{ height: 200 }}
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
        <Flex direction={"column"} gap={"4"}>
          <Text color="gray" size={"1"}>
            {format(date, "MMMM do, yyyy")}
          </Text>
          <Flex direction={"column"} gap={"3"}>
            <Heading size={"8"} as="h2">
              {title}
            </Heading>
            <Text>{description}</Text>
          </Flex>
        </Flex>
      </Link>
    </Card>
  )
}

export default ArticlePreview
