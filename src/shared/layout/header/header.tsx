import { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import SvgUnderline from './svg-underline';

import Flex from 'shared/flex';
import Link from 'shared/link';
import Image from 'next/image';

const Header: FC = () => {
  const { pathname } = useRouter();
  return (
    <Flex
      as='nav'
      height={75}
      position='sticky'
      top={0}
      backgroundColor='background'
      boxShadow='sm'
      fontFamily='primary'
    >
      <Flex
        px={4}
        alignItems='center'
        justifyContent='space-between'
        width={['100%', '100%', '1000px']}
        mx='auto'
      >
        <NextLink href='/' passHref>
          <Link
            fontFamily='primary'
            fontSize='lg'
            sx={{
              textDecoration: 'none',
            }}
          >
            <Image
              title='aroandriamaro.com'
              height={65}
              width={65}
              alt='Hacker cat'
              src='/logo.png'
            />
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
    </Flex>
  );
};

export default Header;
