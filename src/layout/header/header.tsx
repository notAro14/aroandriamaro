import { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import SvgUnderline from './svg-underline';

import Flex from 'shared/flex';
import Link from 'shared/link';

const Header: FC = () => {
  const { pathname } = useRouter();
  return (
    <Flex
      as='nav'
      alignItems='center'
      justifyContent='space-between'
      height={50}
      py={6}
      px={4}
      mb={4}
    >
      <NextLink href='/' passHref>
        <Link
          fontFamily='text'
          fontSize='lg'
          sx={{
            textDecoration: 'none',
          }}
        >
          Aro Andriamaro
        </Link>
      </NextLink>
      <Flex as='ul' gap={4}>
        <Flex as='li'>
          <NextLink href='/' passHref>
            <Link
              fontSize='lg'
              color='heading'
              position='relative'
              sx={{
                textDecoration: 'none',
                ':hover': {
                  color: 'tint',
                },
              }}
            >
              Blog
              {pathname === '/' && <SvgUnderline />}
            </Link>
          </NextLink>
        </Flex>
        <Flex as='li'>
          <NextLink href='/about' passHref>
            <Link
              fontSize='lg'
              color='heading'
              position='relative'
              sx={{
                textDecoration: 'none',
                ':hover': {
                  color: 'tint',
                },
              }}
            >
              About
              {pathname === '/about' && <SvgUnderline />}
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
