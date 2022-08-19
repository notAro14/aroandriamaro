import { FC } from "react"
import NextLink from "next/link"

import Flex from "src/ui/flex"
import Link from "src/ui/link"
import { theme } from "src/ui/stitches.config"
import ThemeSelect from "src/components/theme-select"
import Avatar, { AvatarImage, AvatarFallback } from "src/ui/avatar"

const Header: FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      css={{
        height: 75,
        position: "sticky",
        top: 0,
        backgroundColor: "$bg-transparent",
        backdropFilter: "blur(10px)",
        paddingRight: theme.space.sm,
        paddingLeft: theme.space.sm,
      }}
    >
      <Flex
        align="center"
        css={{
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          "@bp3": {
            width: 1000,
          },
        }}
      >
        <NextLink href="/" passHref>
          <Link css={{ textDecoration: "none" }}>
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/47597252?v=4"
                alt="Aro Andriamaro"
              />
              <AvatarFallback delayMs={600}>AA</AvatarFallback>
            </Avatar>
          </Link>
        </NextLink>
        <ThemeSelect />
      </Flex>
    </Flex>
  )
}

export default Header
