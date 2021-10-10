import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex, VStack, Box } from '@chakra-ui/layout';

import { H1 } from '@/components/headings';
import Link from '@/components/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aro Andriamaro | Frontend developer</title>
        <meta name='description' content="Aro Andriamaro's personal website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        alignItems='center'
        justifyContent='center'
        m='0 auto'
        direction='column'
        h='100vh'
      >
        <Box>
          <H1>Aro Andriamaro</H1>
          <VStack spacing='15px' alignItems='flex-start'>
            <Link href='/writing'>Writing</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/about'>About Me</Link>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
