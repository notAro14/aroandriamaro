import { FC } from "react"

interface Props {
  ariaLabel: string
  symbol: string
  className?: string
}

const Emoji: FC<Props> = ({ ariaLabel, symbol, className }) => (
  <span role="img" className={className} aria-label={ariaLabel}>
    {symbol}
  </span>
)

export default Emoji

// usage
{
  /* <Emoji ariaLabel="Two hands shaking" symbol="🤝🏽"/> */
}
