import { FC } from 'react';
import { GitHub, Twitter, Linkedin } from 'react-feather';

import Flex from 'shared/flex';
import Link from 'shared/link';
import Text from 'shared/text';

export const SOCIAL_LINKS = [
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
      fontFamily='primary'
      as='footer'
      height={100}
      backgroundColor='text'
      color='background'
    >
      <Flex
        as='div'
        px={4}
        alignItems='center'
        flexDirection={['column', 'row']}
        justifyContent={['center', 'space-between']}
        gap={[2, 0]}
        width={['100%', '100%', '1000px']}
        mx='auto'
        fontWeight={100}
      >
        <Text fontWeight={200} color='background'>
          Made by Aro Andriamaro &copy;{new Date().getFullYear()}
        </Text>
        <Flex as='ul' gap={6}>
          {SOCIAL_LINKS.map(({ Component, name, href }) => {
            return (
              <Flex key={name} as='li' alignItems='center' gap={2}>
                <Component />
                <Link
                  href={href}
                  textDecoration='none'
                  fontFamily='primary'
                  color='background'
                  fontWeight={200}
                >
                  {name}
                </Link>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
