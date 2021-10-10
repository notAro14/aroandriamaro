import { FC } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

export const H1: FC<HeadingProps> = (props) => {
  return <ChakraHeading color='yellow.300' as='h1' size='xl' {...props} />;
};
export const H2: FC<HeadingProps> = (props) => {
  return <ChakraHeading as='h2' size='lg' {...props} />;
};
export const H3: FC<HeadingProps> = (props) => {
  return <ChakraHeading as='h3' size='md' {...props} />;
};
export const H4: FC<HeadingProps> = (props) => {
  return <ChakraHeading as='h4' size='sm' {...props} />;
};
