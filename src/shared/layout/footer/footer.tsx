import { theme } from "lib/stitches.config"
import { FC } from "react"
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"

import Flex from "shared/flex"
import Link from "shared/link"
import Text from "shared/text"

export const SOCIAL_LINKS = [
  {
    name: "Github",
    href: "https://github.com/notAro14",
    Component: () => <FaGithub size={15} />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/notarodev",
    Component: () => <FaTwitter size={15} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/notaro14/",
    Component: () => <FaLinkedinIn size={15} />,
  },
]

const Footer: FC = () => {
  return (
    <Flex
      as="footer"
      css={{
        height: 100,
        backgroundColor: theme.colors.compBg,
      }}
    >
      <Flex
        css={{
          "paddingRight": theme.space.md,
          "paddingLeft": theme.space.md,
          "alignItems": "center",
          "flexDirection": "column",
          "justifyContent": "center",
          "gap": theme.space.xs,
          "width": "100%",
          "marginLeft": "auto",
          "marginRight": "auto",
          "fontWeight": 100,
          "fontSize": theme.space.sm,
          "@bp2": {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 0,
            width: "100%",
          },
          "@bp3": {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 0,
            width: 1000,
          },
        }}
      >
        <Text fontSize="inherit" color="text">
          Made by Aro Andriamaro{" "}
          <Text as="span" fontSize="inherit" color="lo-text">
            &copy;{" "}
          </Text>
          {new Date().getFullYear()}
        </Text>
        <Flex
          as="ul"
          css={{
            gap: theme.space.xl,
          }}
        >
          {SOCIAL_LINKS.map(({ Component, name, href }) => {
            return (
              <Flex
                key={name}
                as="li"
                css={{
                  alignItems: "center",
                  gap: theme.space.xs,
                  color: theme.colors["lo-text"],
                }}
              >
                <Component />
                <Link
                  href={href}
                  textDecoration="none"
                  fontSize="inherit"
                  color="text"
                  fontWeight={200}
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                      color: "text",
                    },
                  }}
                >
                  {name}
                </Link>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
