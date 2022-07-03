import { FC } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

import SvgUnderline from "./svg-underline"
import logo from "./logo.png"

import Flex from "shared/flex"
import Link from "shared/link"
import { theme } from "lib/stitches.config"

const Header: FC = () => {
  const { pathname } = useRouter()
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
                css={{
                  "fontSize": theme.fontSizes.lg,
                  "color": theme.colors.text,
                  "position": "relative",
                  "fontWeight": 200,
                  "textDecoration": "none",
                  "&:hover": {
                    color: theme.colors.brand,
                  },
                }}
              >
                Blog
                {pathname === "/" && <SvgUnderline />}
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
