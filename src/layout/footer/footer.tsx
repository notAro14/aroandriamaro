import { FC } from 'react';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import NextLink from 'next/link';

import Flex from 'shared/flex';
import Link from 'shared/link';

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
      p={4}
      height={50}
      alignItems='center'
      justifyContent='space-around'
      backgroundColor='text'
      color='background'
    >
      <Flex as='ul' gap={6}>
        {SOCIAL_LINKS.map(({ Component, name, href }) => {
          return (
            <Flex key={name} as='li' alignItems='center' gap={2}>
              <Component />
              <NextLink href={href} passHref>
                <Link fontFamily='heading' color='background'>
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
