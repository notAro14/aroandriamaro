import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  ariaLabel: string;
  symbol: string;
}

const Emoji: FC<Props> = ({ ariaLabel, symbol, ...restOfBoxProps }) => (
  <Box as='span' role='img' aria-label={ariaLabel} {...restOfBoxProps}>
    {symbol}
  </Box>
);

export default Emoji;

// usage
{
  /* <Emoji ariaLabel="Two hands shaking" symbol="🤝🏽"/> */
}
