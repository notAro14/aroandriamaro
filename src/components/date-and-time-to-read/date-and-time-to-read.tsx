import type { FC } from "react"

import { format } from "src/utils/date"
import Flex from "src/ui/flex"
import Emoji from "src/components/emoji"

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
        color: "$text-vibrant",
        backgroundColor: "$ui",
        padding: "$xs $xl",
        borderRadius: "$lg",
        fontSize: "$md",
        boxShadow: "$low",
        fontWeight: 100,
        width: "fit-content",
        margin: "0 auto $2xl auto",
        fontFamily: "$primary",
        userSelect: "none",
        "&:hover": {
          backgroundColor: "$ui-hovered",
        },
      }}
    >
      <Emoji symbol="📅" ariaLabel="calendar" />
      {`${format(date, "MMMM do")}, ${format(date, "yyyy")} - ${timeToRead}`}
    </Flex>
  )
}

export default DateAndTimeToRead
