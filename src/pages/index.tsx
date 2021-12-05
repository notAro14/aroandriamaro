import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex, VStack, Box } from '@chakra-ui/layout';
import {
  Text,
  IconButton,
  Heading,
  Tooltip,
  VisuallyHidden,
} from '@chakra-ui/react';
import { GiSpeaker } from 'react-icons/gi';

import Link from '@/components/link';
import Emoji from '@/components/emoji';
import Footer from '@/components/footer';

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
        h='calc(100vh - 50px)'
        as='main'
      >
        <Box as='article'>
          <Flex mb='1' as='header' alignItems='center'>
            <Heading color='yellow.300' as='h1' size='xl'>
              Aro Andriamaro
            </Heading>
            <Tooltip
              label='Listen pronunciation'
              placement='top'
              bg='yellow.300'
              color='blackAlpha.700'
            >
              <IconButton
                aria-label='speaker'
                rounded='full'
                fontSize='3xl'
                ml='2'
                variant='outline'
                colorScheme='teal'
                icon={
                  <>
                    <VisuallyHidden>Listen pronunciation</VisuallyHidden>
                    <GiSpeaker />
                  </>
                }
              />
            </Tooltip>
          </Flex>
          <Text mb='10' as='p' fontSize='xl' color='gray.400'>
            Software developer
          </Text>
          <VStack spacing='6' alignItems='flex-start'>
            <Link
              display='flex'
              alignItems='center'
              minWidth='125px'
              _focus={{
                outline: 0,
              }}
              textTransform='uppercase'
              pb='2'
              href='/writing'
              fontSize='xl'
            >
              <Emoji mr='4' ariaLabel='pencil' symbol='✏️' /> Writing
            </Link>
            <Link
              fontSize='xl'
              _focus={{
                outline: 0,
              }}
              display='flex'
              alignItems='center'
              minWidth='125px'
              textTransform='uppercase'
              href='#'
              //href='/projects'
              textDecoration='line-through'
              pb='2'
            >
              <Emoji mr='4' ariaLabel='rocket' symbol='🚀' /> Projects- COMING
              SOON
            </Link>
            <Link
              pb='2'
              fontSize='xl'
              display='flex'
              _focus={{
                outline: 0,
              }}
              alignItems='center'
              minWidth='125px'
              textTransform='uppercase'
              textDecoration='line-through'
              //href='/about'
              href='#'
            >
              <Emoji mr='4' ariaLabel='developer' symbol='🧑🏾‍💻' /> About Me -
              COMING SOON
            </Link>
          </VStack>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
