import { FC } from 'react';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import NextLink from 'next/link';

import Flex from 'shared/flex';
import Link from 'shared/link';
import Text from 'shared/text';

const SOCIAL_LINKS = [
  {
    name: 'Github',
    href: 'https://github.com/notAro14',
    Component: () => <GitHub size={15} />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/notarodev',
    Component: () => <Twitter size={15} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mamitiana/',
    Component: () => <Linkedin size={15} />,
  },
];

const Footer: FC = () => {
  return (
    <Flex
      as='footer'
      p={2}
      height={75}
      alignItems='center'
      flexDirection={['column', 'row']}
      justifyContent='space-around'
      backgroundColor='text'
      color='background'
    >
      <Text fontSize='sm' color='background'>
        Made by Aro Andriamaro &copy;{new Date().getFullYear()}
      </Text>
      <Flex as='ul' gap={6}>
        {SOCIAL_LINKS.map(({ Component, name, href }) => {
          return (
            <Flex key={name} as='li' alignItems='center' gap={2}>
              <Component />
              <NextLink href={href} passHref>
                <Link
                  textDecoration='none'
                  fontFamily='text'
                  fontSize='sm'
                  color='background'
                >
                  {name}
                </Link>
              </NextLink>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Footer;
