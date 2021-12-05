import { useMemo, FC } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { Box, Flex } from '@chakra-ui/react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { Heading, Text } from '@chakra-ui/react';

import Link from '@/components/link';
import components from '@/components/article/components';
import { getAllArticles, getSingleArticle, Frontmatter } from '@/utils/mdx';
import Emoji from '@/components/emoji';
import Footer from '@/components/footer';
interface Props {
  post: {
    frontmatter: Frontmatter;
    code: string;
    previousArticle: {
      frontmatter: Frontmatter;
      slug: string;
    };
    nextArticle: {
      frontmatter: Frontmatter;
      slug: string;
    };
  };
}

const Post: FC<Props> = ({ post }) => {
  const { code, nextArticle, previousArticle, frontmatter } = post;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Box as='main'>
        <Head>
          <title>{frontmatter.title}</title>
        </Head>
        <Box
          p='4'
          minH='calc(100vh - 100px)'
          w={['100%', 400, 500, 1000]}
          m='auto'
          as='article'
        >
          <Heading
            my='4'
            as='h1'
            color='pink.400'
            borderBottom='1px solid'
            borderBottomColor='pink.400'
            pb='4'
          >
            {frontmatter.title}
          </Heading>
          <Flex fontSize='lg'>
            <Emoji ariaLabel='calendar' symbol='📅' />{' '}
            <Text ml='2' color='grey'>
              {frontmatter.date}
            </Text>
          </Flex>
          <Component components={components} />
        </Box>
        <Flex
          as='nav'
          //borderTop='1px solid white'
          height='100px'
          alignItems='center'
          justifyContent={
            nextArticle && !previousArticle ? 'flex-end' : 'space-between'
          }
          w={['100%', 400, 500, 1000]}
          m='auto'
          my='4'
          p='4'
        >
          {previousArticle && (
            <Link
              display='flex'
              alignItems='center'
              _focus={{
                outline: 0,
              }}
              href={`/writing/${previousArticle.slug}`}
            >
              <BsArrowLeftShort /> {previousArticle.frontmatter.title}
            </Link>
          )}
          {nextArticle && (
            <Link
              display='flex'
              _focus={{
                outline: 0,
              }}
              alignItems='center'
              href={`/writing/${nextArticle.slug}`}
            >
              {nextArticle.frontmatter.title} <BsArrowRightShort />
            </Link>
          )}
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  // https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
  const { slug } = context.params as Params;
  const post = await getSingleArticle(slug);
  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticles({ sorted: false }).map(({ slug }) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
