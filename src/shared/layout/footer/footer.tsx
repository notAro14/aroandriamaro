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
    <Flex as="footer" height={100} backgroundColor="compBg">
      <Flex
        as="div"
        px={4}
        alignItems="center"
        flexDirection={["column", "row"]}
        justifyContent={["center", "space-between"]}
        gap={[2, 0]}
        width={["100%", "100%", "1000px"]}
        mx="auto"
        fontWeight={100}
        fontSize="sm"
      >
        <Text fontSize="inherit" color="text">
          Made by Aro Andriamaro{" "}
          <Text as="span" fontSize="inherit" color="lo-text">
            &copy;{" "}
          </Text>
          {new Date().getFullYear()}
        </Text>
        <Flex as="ul" gap={6}>
          {SOCIAL_LINKS.map(({ Component, name, href }) => {
            return (
              <Flex
                key={name}
                as="li"
                alignItems="center"
                gap={2}
                color="lo-text"
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
