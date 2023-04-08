import { FC } from "react"
import NextLink from "next/link"

import link from "src/ui/link"
import ThemeSelect from "src/components/theme-select"
import Avatar, { AvatarImage, AvatarFallback } from "src/ui/avatar"
import { NavbarContainer, NavbarMain } from "./navbar.styles"
import { AVATAR_URL } from "src/constants"
import Text from "src/ui/text"
import { theme } from "src/themes/stitches.config"

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavbarMain>
        <NextLink
          className={link({
            noUnderline: true,
            css: {
              display: "flex",
              alignItems: "center",
              gap: theme.space.sm,
            },
          })}
          href="/"
          passHref
        >
          <Avatar>
            <AvatarImage src={AVATAR_URL} alt="Aro Andriamaro" />
            <AvatarFallback delayMs={600}>AA</AvatarFallback>
          </Avatar>
          <Text
            css={{
              lineHeight: 1,
              fontFamily: theme.fonts.secondary,
            }}
          >
            Aro&apos;s tech blog
          </Text>
        </NextLink>
        <ThemeSelect />
      </NavbarMain>
    </NavbarContainer>
  )
}

export default Navbar
