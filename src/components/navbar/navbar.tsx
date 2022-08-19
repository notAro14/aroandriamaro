import { FC } from "react"
import NextLink from "next/link"

import Link from "src/ui/link"
import ThemeSelect from "src/components/theme-select"
import Avatar, { AvatarImage, AvatarFallback } from "src/ui/avatar"
import { NavbarContainer, NavbarMain } from "./navbar.styles"
import { AVATAR_URL } from "src/constants"

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavbarMain>
        <NextLink href="/" passHref>
          <Link noUnderline>
            <Avatar>
              <AvatarImage src={AVATAR_URL} alt="Aro Andriamaro" />
              <AvatarFallback delayMs={600}>AA</AvatarFallback>
            </Avatar>
          </Link>
        </NextLink>
        <ThemeSelect />
      </NavbarMain>
    </NavbarContainer>
  )
}

export default Navbar
