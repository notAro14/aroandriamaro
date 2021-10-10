import { FC } from 'react';

interface Props {
  ariaLabel: string;
  symbol: string;
}

const Emoji: FC<Props> = ({ ariaLabel, symbol }) => (
  <span role='img' aria-label={ariaLabel}>
    {symbol}
  </span>
);

export default Emoji;

// usage
{
  /* <Emoji ariaLabel="Two hands shaking" symbol="🤝🏽"/> */
}
