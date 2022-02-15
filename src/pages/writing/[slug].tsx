import { useMemo, FC } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { MDXEmbedProvider } from 'mdx-embed';
import NextLink from 'next/link';

import { format } from 'utils/date';
import { getAllArticles, getSingleArticle } from 'utils/mdx';

import Flex from 'shared/flex';
import Heading from 'shared/heading';
import Link from 'shared/link';
import PageLayout from 'layout/page-layout';
import SyntaxHighlighter from 'features/code';
import Text from 'shared/text';
import Emoji from 'features/emoji';

const components = {
  code: SyntaxHighlighter,
  h1: (props: any) => (
    <Heading as='h1' mt={4} mb={-4} fontSize={['2xl', '3xl']} {...props} />
  ),
  h2: (props: any) => (
    <Heading mt={4} mb={-5} fontSize={['xl', '2xl']} {...props} />
  ),
  h3: (props: any) => (
    <Heading as='h3' mt={4} mb={-5} fontSize={['lg', 'xl']} {...props} />
  ),
  p: (props: any) => (
    <Text my={5} fontSize={['md', 'lg']} lineHeight='2' {...props} />
  ),
  em: (props: any) => (
    <Text as='em' backgroundColor='tint' px={1} color='background' {...props} />
  ),
  a: (props: any) => (
    <NextLink passHref href={props.href}>
      <Link {...props} />
    </NextLink>
  ),
  ul: (props: any) => (
    <Flex
      as='ul'
      flexDirection='column'
      sx={{
        listStyleType: 'disc',
      }}
      color='text'
      gap={2}
      pl={4}
      {...props}
    />
  ),
};

interface Props {
  post: Awaited<ReturnType<typeof getSingleArticle>>;
}

const Post: FC<Props> = ({ post }) => {
  const { code, frontmatter, timeToRead } = post;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <PageLayout>
        <Flex
          as='p'
          display='flex'
          gap={3}
          color='text'
          fontSize={['md', 'lg']}
          fontFamily='text'
        >
          <Emoji symbol='📅' ariaLabel='calendar' />
          {`${format(frontmatter.date, 'MMMM do')}, ${format(
            frontmatter.date,
            'yyyy'
          )} - ${timeToRead.text}`}
        </Flex>
        <MDXEmbedProvider>
          <Component components={components} />
        </MDXEmbedProvider>
      </PageLayout>
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
