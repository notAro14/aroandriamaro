import { FC } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

import SvgUnderline from "./svg-underline"
import logo from "./logo.png"
import useToggleTheme from "theme/use-toggle-theme.hook"

import Flex from "shared/flex"
import BaseButton from "shared/button/base-button"
import Link from "shared/link"
import { theme } from "lib/stitches.config"

const Header: FC = () => {
  const { pathname } = useRouter()
  const toggleTheme = useToggleTheme()
  return (
    <Flex
      as="nav"
      css={{
        height: 75,
        position: "sticky",
        top: 0,
        backgroundColor: theme.colors.appBg,
      }}
    >
      <Flex
        css={{
          "alignItems": "center",
          "justifyContent": "space-between",
          "marginLeft": "auto",
          "marginRight": "auto",
          "width": "100%",
          "@bp3": {
            width: 1000,
          },
        }}
      >
        <NextLink href="/" passHref>
          <Link
            fontSize="lg"
            sx={{
              textDecoration: "none",
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
        <Flex
          as="ul"
          css={{
            alignItems: "center",
            gap: theme.space.md,
          }}
        >
          <Flex as="li">
            <NextLink href="/" passHref>
              <Link
                fontSize="lg"
                color="text"
                position="relative"
                fontWeight={200}
                sx={{
                  "textDecoration": "none",
                  ":hover": {
                    color: "brand",
                  },
                }}
              >
                Blog
                {pathname === "/" && <SvgUnderline />}
              </Link>
            </NextLink>
          </Flex>

          <BaseButton
            backgroundColor="compBg"
            color="text"
            borderRadius="sm"
            border="none"
            paddingX={2}
            paddingY={1}
            onClick={toggleTheme}
            fontWeight={500}
            sx={{
              "transition": "background-color 200ms ease-in-out",
              ":hover": {
                cursor: "pointer",
                backgroundColor: "compBg-hover",
              },
            }}
          >
            Toggle theme
          </BaseButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
