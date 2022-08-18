import { FC } from "react"
import NextLink from "next/link"
import Image from "next/image"

import logo from "./logo.png"

import Flex from "src/shared/flex"
import Link from "src/shared/link"
import { theme } from "src/lib/stitches.config"
import ThemeSelect from "src/features/theme-select"

const Header: FC = () => {
  return (
    <Flex
      as="nav"
      css={{
        height: 75,
        position: "sticky",
        top: 0,
        backgroundColor: "$bg",
        paddingRight: theme.space.sm,
        paddingLeft: theme.space.sm,
      }}
    >
      <Flex
        css={{
          alignItems: "center",
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
          <Link
            css={{
              textDecoration: "none",
              fontSize: theme.fontSizes.lg,
            }}
          >
            <Image
              width={50}
              height={50}
              layout="fixed"
              title="aroandriamaro.com"
              alt="Hacker cat"
              src={logo}
            />
          </Link>
        </NextLink>
        <ThemeSelect />
      </Flex>
    </Flex>
  )
}

export default Header
