import type { NextPage } from 'next';
import Head from 'next/head';

import Box from 'shared/box';
import Heading from 'shared/heading';
import PageLayout from 'layout/page-layout';
import Text from 'shared/text';

const STACK = [
  'typescript / react / next.js',
  'emotion / theme ui / styled system',
  'testing library / mock service worker',
  'cypress',
  'react-query',
  'redux toolkit / rtk query',
  'supabase',
  'fastify / prisma / postgre',
];

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aro Andriamaro | About</title>
        <meta name='description' content="Aro Andriamaro's personal website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageLayout as='main'>
        <Heading mb={2} fontSize='3xl'>
          About
        </Heading>
        <Text mb={4} fontSize={['md', 'lg']}>
          Hello, I’m Aro. I’m a frontend developer based in Lyon, France.
        </Text>
        <Text mb={8} fontSize={['md', 'lg']}>
          I graduated in electronic engineering and worked in this field for
          about 2 years before switching to web development.
        </Text>
        <Heading my={2} fontSize='3xl'>
          Tech
        </Heading>
        <Text mb={2} fontSize={['md', 'lg']}>
          My primary tech stack consist of:
        </Text>
        <Box
          pl={4}
          sx={{
            listStyleType: 'disc',
          }}
          as='ul'
        >
          {STACK.map((stack) => (
            <Text fontSize={['md', 'lg']} as='li' key={stack}>
              {stack}
            </Text>
          ))}
        </Box>
      </PageLayout>
    </>
  );
};

export default About;
