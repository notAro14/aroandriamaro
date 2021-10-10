import { FC } from 'react';
import NextLink from 'next/link';
import { UrlObject } from 'url';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface MyLinkProps extends Omit<ChakraLinkProps, 'href'> {
  href: string | UrlObject;
}

const Link: FC<MyLinkProps> = ({ href, ...restOfChakraProps }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink
        position='relative'
        _hover={{
          _before: {
            transform: 'scale3d(1, 1, 1)',
            transformOrigin: 'left',
          },
        }}
        _before={{
          background: 'yellow.300',
          content: "''",
          height: '3px',
          left: 0,
          position: 'absolute',
          bottom: 0,
          transform: 'scale3d(0,1,1)',
          transformOrigin: 'right',
          transition: 'transform 0.4s',
          width: '100%',
        }}
        {...restOfChakraProps}
      />
    </NextLink>
  );
};

export default Link;
