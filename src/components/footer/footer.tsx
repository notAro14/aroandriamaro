import { FC } from "react"

import Flex from "src/ui/flex"
import {
  FooterContainer,
  FooterMain,
  CopyrightContainer,
  CopyRightSymbol,
  SocialLinkContainer,
  SocialLink,
} from "./footer.styles"
import Svg from "src/ui/svg"
import { SOCIAL_LINKS, URL_TO_SPRITE } from "src/constants"

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <CopyrightContainer>
          Made by Aro Andriamaro{" "}
          <CopyRightSymbol as="span">&copy; </CopyRightSymbol>
          {new Date().getFullYear()}
        </CopyrightContainer>
        <Flex as="ul" spacing="lg" align="center">
          {SOCIAL_LINKS.map(({ name, href }) => {
            return (
              <SocialLinkContainer key={name}>
                <Svg>
                  <use href={`${URL_TO_SPRITE}#${name}`} />
                </Svg>
                <SocialLink href={href}>{name}</SocialLink>
              </SocialLinkContainer>
            )
          })}
        </Flex>
      </FooterMain>
    </FooterContainer>
  )
}

export default Footer
