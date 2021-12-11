/** @jsxImportSource theme-ui */
import { useMemo, FC } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { MDXEmbedProvider } from 'mdx-embed';
import { Heading, Link, Text, Flex } from 'theme-ui';

import SyntaxHighlighter from '@/components/code';

const components = {
  code: SyntaxHighlighter,
  h1: (props: any) => (
    <Heading
      as='h1'
      color='primary'
      mt='4'
      mb='-4'
      sx={{
        fontSize: ['2xl', '6xl'],
        textTransform: 'uppercase',
      }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      as='h2'
      color='primary'
      mt='4'
      mb={-5}
      sx={{
        fontSize: ['2xl', '5xl'],
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      as='h3'
      color='primary'
      mt='4'
      mb={-5}
      sx={{
        fontSize: ['lg', '2xl'],
      }}
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading as='h4' color='primary' mt='4' mb={-5} {...props} />
  ),
  h5: (props: any) => (
    <Heading as='h5' color='primary' mt='4' mb={-5} {...props} />
  ),
  h6: (props: any) => (
    <Heading as='h6' color='primary' mt='4' mb={-5} {...props} />
  ),
  p: (props: any) => (
    <Text
      as='p'
      color='text'
      my={[5, 4]}
      sx={{
        fontSize: ['lg', 'xl'],
        lineHeight: [1.9, 1.75, 1.5],
      }}
      {...props}
    />
  ),
  em: (props: any) => (
    <Text
      as='em'
      color='gray'
      sx={{
        fontWeight: 'extra',
      }}
      {...props}
    />
  ),
  a: (props: any) => (
    <Link
      color='accent'
      sx={{
        ':visited': {
          color: 'dark-accent',
        },
      }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <Flex
      as='ul'
      sx={{
        flexDirection: 'column',
        gap: 2,
        pl: 6,
      }}
      {...props}
    />
  ),
};

import { getAllArticles, getSingleArticle, Frontmatter } from '@/utils/mdx';
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
  const { code, frontmatter } = post;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <article>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <MDXEmbedProvider>
        <Component components={components} />
      </MDXEmbedProvider>
    </article>
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
