import Head from 'next/head';

import Box from 'shared/box';
import Heading from 'shared/heading';
import PageLayout from 'layout/page-layout';
import Text from 'shared/text';
import { NextPageWithLayout } from 'types';

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

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About Aro Andriamaro</title>
        <meta name='description' content='Get to know Aro Andriamaro' />
        <meta
          name='keywords'
          content='about, aro, aroniaina, aro andriamaro, aroniaina andriamaro'
        />
      </Head>
      <Heading mb={2} fontSize='3xl'>
        About
      </Heading>
      <Text mb={4} fontSize={['md', 'lg']}>
        Hello, I’m Aro. I’m a frontend developer based in Lyon, France.
      </Text>
      <Text mb={8} fontSize={['md', 'lg']}>
        I graduated in electronic engineering and worked in this field for about
        2 years before switching to web development.
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
    </>
  );
};

About.getLayout = (page) => <PageLayout as='main'>{page}</PageLayout>;

export default About;
