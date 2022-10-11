import { FC } from "react"

import {
  FooterContainer,
  FooterMain,
  CopyrightContainer,
  CopyRightSymbol,
  SocialLink,
} from "./footer.styles"
import Svg from "src/ui/svg"
import { SOCIAL_LINKS, URL_TO_SPRITE, GITHUB } from "src/constants"
import HStack from "src/ui/h-stack"
import Link from "src/ui/link"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { theme } from "src/themes/stitches.config"

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <CopyrightContainer>
          <span>Made by a</span>
          <Link
            href={GITHUB.href}
            target="_blank"
            rel="noreferrer"
            noUnderline
            css={{
              fontSize: "inherit",
              display: "flex",
              alignItems: "center",
              gap: theme.space.xxs,
            }}
          >
            Zoomer <ExternalLinkIcon />
          </Link>
          <span>
            <CopyRightSymbol as="span">&copy;</CopyRightSymbol>
            {new Date().getFullYear()}
          </span>
        </CopyrightContainer>
        <HStack as="ul" spacing="lg" align="center">
          {SOCIAL_LINKS.map(({ name, href }) => {
            return (
              <SocialLink aria-label={name} title={name} href={href} key={name}>
                <Svg>
                  <use href={`${URL_TO_SPRITE}#${name}`} />
                </Svg>
              </SocialLink>
            )
          })}
        </HStack>
      </FooterMain>
    </FooterContainer>
  )
}

export default Footer
