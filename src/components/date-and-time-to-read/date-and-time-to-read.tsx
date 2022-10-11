import type { FC } from "react"

import { format } from "src/utils/date"
import Flex from "src/ui/flex"
import Emoji from "src/components/emoji"
import { theme } from "src/themes/stitches.config"

interface DateAndTimeToReadProps {
  date: string
  timeToRead: string
}

const DateAndTimeToRead: FC<DateAndTimeToReadProps> = ({
  date,
  timeToRead,
}) => {
  return (
    <Flex
      as="p"
      spacing="md"
      align="center"
      justify="center"
      css={{
        color: theme.colors["text-vibrant"],
        backgroundColor: theme.colors.ui,
        padding: `${theme.space.xs} ${theme.space.xl}`,
        borderRadius: theme.radii.lg,
        fontSize: theme.fontSizes.md,
        boxShadow: theme.shadows.low,
        fontWeight: theme.fontWeights.thin,
        width: "fit-content",
        margin: `0 auto ${theme.space["2xl"]} auto`,
        fontFamily: theme.fonts.primary,
        userSelect: "none",
        transition: "all 200ms ease-in-out",
        "&:hover": {
          backgroundColor: theme.colors["ui-hovered"],
          boxShadow: theme.shadows.medium,
        },
      }}
    >
      <Emoji symbol="📅" ariaLabel="calendar" />
      {`${format(date, "MMMM do")}, ${format(date, "yyyy")} - ${timeToRead}`}
    </Flex>
  )
}

export default DateAndTimeToRead
