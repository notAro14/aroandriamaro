import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import { format } from 'utils/date';
import { getAllArticles, getSingleArticle } from 'utils/mdx';
import { NextPageWithLayout } from 'types';

import Flex from 'shared/flex';
import Heading from 'shared/heading';
import Link from 'shared/link';
import SyntaxHighlighter from 'features/code';
import Text from 'shared/text';
import Emoji from 'features/emoji';
import PageHeading from 'features/page-heading';

const components = {
  code: SyntaxHighlighter,
  h1: (props: any) => (
    <Heading as='h1' my={4} fontSize={['2xl', '3xl']} {...props} />
  ),
  h2: (props: any) => <Heading my={4} fontSize={['xl', '2xl']} {...props} />,
  h3: (props: any) => (
    <Heading as='h3' my={4} fontSize={['lg', 'xl']} {...props} />
  ),
  p: (props: any) => <Text color='text' my={5} lineHeight='1.65' {...props} />,
  em: (props: any) => (
    <Text as='em' color='tint' fontFamily='primary' {...props} />
  ),
  a: (props: any) => (
    <Link
      href={props.href}
      fontSize='lg'
      color='tint'
      fontWeight={200}
      {...props}
    />
  ),
  ul: (props: any) => (
    <Flex
      fontSize={['lg', 'xl']}
      fontWeight={200}
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

const Post: NextPageWithLayout<Props> = ({ post }) => {
  const { code, frontmatter, timeToRead } = post;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name='description' content={frontmatter.description} />
        <meta
          name='keywords'
          content='javascript, typescript, react, react.js, next, next.js'
        />
      </Head>

      <PageHeading as='h1'>{frontmatter.title}</PageHeading>
      <Flex
        as='p'
        display='flex'
        gap={3}
        color='text'
        fontSize='md'
        fontWeight={100}
        fontFamily='primary'
      >
        <Emoji symbol='📅' ariaLabel='calendar' />
        {`${format(frontmatter.date, 'MMMM do')}, ${format(
          frontmatter.date,
          'yyyy'
        )} - ${timeToRead.text}`}
      </Flex>
      <Component components={components} />
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
