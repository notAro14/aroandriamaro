import { FC } from "react"

import Box from "shared/box"

const ContentLayout: FC = ({ children }) => {
  return (
    <Box
      as="main"
      width={["100%", "100%", "1000px"]}
      flex="1"
      px={4}
      py={8}
      mx="auto"
    >
      {children}
    </Box>
  )
}

export default ContentLayout
