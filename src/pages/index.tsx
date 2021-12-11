/** @jsxImportSource theme-ui */
import type { NextPage } from 'next';
import { FC } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Heading, Text, Box, Flex, Link } from 'theme-ui';
import { BiHash } from 'react-icons/bi';

import { getAllArticles, Article } from '@/utils/mdx';
import Emoji from '@/components/emoji';
import { distanceToNow } from '@/utils/date';

export const getStaticProps = () => {
  const articles = getAllArticles({ sorted: true });
  return {
    props: {
      articles,
    },
  };
};

interface Props {
  articles: Article[];
}

const MyHeading: FC = ({ children }) => {
  return (
    <Heading
      as='h2'
      sx={{
        fontSize: '3xl',
        mt: 4,
        mb: -4,
      }}
      color='primary'
    >
      {children}
    </Heading>
  );
};

const Logo = () => {
  return (
    <Heading
      as='h1'
      color='accent'
      sx={{
        fontSize: ['3xl', '6xl'],
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'underline',
        my: 5,
      }}
    >
      <BiHash /> aroandriamaro.com
    </Heading>
  );
};

const MyText: FC = ({ children }) => {
  return (
    <Text
      as='p'
      sx={{
        fontSize: 'lg',
        my: 5,
      }}
    >
      {children}
    </Text>
  );
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Aro Andriamaro | Frontend developer</title>
        <meta name='description' content="Aro Andriamaro's personal website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Logo />
      <MyHeading>
        <Emoji symbol='💻' ariaLabel='laptop' /> About me
      </MyHeading>
      <MyText>
        Hi, I&apos;m Aro, a software developer based in Lyon, France.
      </MyText>
      <MyHeading>
        <Emoji ariaLabel='pencil' symbol='✏️' /> Blog
      </MyHeading>
      <MyText>I write some stuff about web development (mostly).</MyText>
      <Flex
        as='ul'
        sx={{
          listStyleType: 'none',
          flexDirection: 'column',
          gap: 6,
          p: 0,
        }}
      >
        {articles.map((article) => {
          return (
            <Box
              as='li'
              sx={{
                boxShadow: 'medium',
                py: 2,
                px: 4,
                borderRadius: 'md',
                backgroundColor: 'text',
                color: 'background',
                textDecoration: 'none',
                fontWeight: 'semi',
                width: ['100%', '75%', '50%'],
              }}
              key={article.slug}
            >
              <Flex
                as='article'
                sx={{
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box as='header'>
                  <Text
                    color='gray'
                    sx={{
                      fontSize: 'sm',
                    }}
                  >
                    {distanceToNow(article.frontmatter.date) + ' ago'}
                  </Text>
                  <Heading
                    as='h3'
                    color='background'
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 'extra',
                    }}
                  >
                    {article.frontmatter.title}
                  </Heading>
                  <Text
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      lineClamp: 2,
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {article.frontmatter.description}
                  </Text>
                </Box>
                <NextLink href={`/writing/${article.slug}`} passHref>
                  <Link>Read more</Link>
                </NextLink>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default Home;
