import { FC } from "react"

import {
  FooterContainer,
  FooterMain,
  CopyrightContainer,
  CopyRightSymbol,
} from "./footer.styles"
import Svg from "src/ui/svg"
import { SOCIAL_LINKS, URL_TO_SPRITE, GITHUB } from "src/constants"
import HStack from "src/ui/h-stack"
import link from "src/ui/link"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { theme } from "src/themes/stitches.config"

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <CopyrightContainer>
          <span>Made by </span>
          <a
            className={link({
              noUnderline: true,
              css: {
                fontSize: "inherit",
                display: "flex",
                alignItems: "center",
                gap: theme.space.xxs,
              },
            })}
            href={GITHUB.href}
            target="_blank"
            rel="noreferrer"
          >
            notAro14 <ExternalLinkIcon />
          </a>
          <span>
            <CopyRightSymbol as="span">&copy;</CopyRightSymbol>
            {new Date().getFullYear()}
          </span>
        </CopyrightContainer>
        <HStack
          as="ul"
          spacing="lg"
          align="center"
          css={{ listStyleType: "none" }}
        >
          {SOCIAL_LINKS.map(({ name, href }) => {
            return (
              <li key={name}>
                <a
                  className={link({
                    css: {
                      textDecoration: "none",
                      fontSize: theme.fontSizes.lg,
                      color: "$text-functional",
                      textTransform: "capitalize",
                      transition: "color 150ms ease-in-out",
                      "&:hover": {
                        cursor: "pointer",
                        color: theme.colors["text-vibrant-low"],
                      },
                    },
                  })}
                  aria-label={name}
                  title={name}
                  href={href}
                >
                  <Svg>
                    <use href={`${URL_TO_SPRITE}#${name}`} />
                  </Svg>
                </a>
              </li>
            )
          })}
        </HStack>
      </FooterMain>
    </FooterContainer>
  )
}

export default Footer
