import type { FC } from "react"

import Emoji from "src/component/emoji"

import { format } from "src/utils/date"
import * as styles from "./DateTimeToRead.css"

interface DateAndTimeToReadProps {
  date: string
  timeToRead: string
}

const DateAndTimeToRead: FC<DateAndTimeToReadProps> = ({
  date,
  timeToRead,
}) => {
  return (
    <p className={styles.dateTimeToRead}>
      <Emoji symbol="📅" ariaLabel="calendar" />
      <span>
        {`${format(date, "MMMM do")}, ${format(date, "yyyy")} - ${timeToRead}`}
      </span>
    </p>
  )
}

export default DateAndTimeToRead
