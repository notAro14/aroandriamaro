import { FC } from "react"

import { styled, theme } from "src/lib/stitches.config"
import Flex from "src/shared/flex"
import Link from "src/shared/link"
import Text from "src/shared/text"

const URL_TO_SPRITE = "/icons/sprite.svg"

const StyledSVG = styled("svg", {
  fontSize: theme.fontSizes.lg,
  width: "1em",
  height: "1em",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "1.5",
  stroke: "currentColor",
  fill: "none",
})

export const SOCIAL_LINKS = [
  {
    name: "Github",
    href: "https://github.com/notAro14",
    Component: () => (
      <StyledSVG>
        <use href={`${URL_TO_SPRITE}#github`} />
      </StyledSVG>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/notarodev",
    Component: () => (
      <StyledSVG>
        <use href={`${URL_TO_SPRITE}#twitter`} />
      </StyledSVG>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/notaro14/",
    Component: () => (
      <StyledSVG>
        <use href={`${URL_TO_SPRITE}#linkedin`} />
      </StyledSVG>
    ),
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
          paddingRight: theme.space.md,
          paddingLeft: theme.space.md,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: theme.space.xs,
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          fontWeight: 100,
          fontSize: theme.space.sm,
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
        <Text css={{ fontSize: "inherit", color: theme.colors.text }}>
          Made by Aro Andriamaro{" "}
          <Text
            as="span"
            css={{
              fontSize: "inherit",
              color: theme.colors["lo-text"],
            }}
          >
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
                  css={{
                    textDecoration: "none",
                    fontSize: "inherit",
                    color: theme.colors.text,
                    fontWeight: 200,
                    "&:hover": {
                      cursor: "pointer",
                      color: theme.colors.text,
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
