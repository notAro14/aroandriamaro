import { FC } from "react"

import { theme, styled } from "src/ui/stitches.config"

const Layout = styled("main", {
  flex: "1",
  paddingLeft: theme.space.md,
  paddingRight: theme.space.md,
  paddingTop: theme.space["3xl"],
  paddingBottom: theme.space["3xl"],
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  "@bp3": {
    width: 1000,
  },
})

const ContentLayout: FC = ({ children }) => {
  return <Layout>{children}</Layout>
}

export default ContentLayout
