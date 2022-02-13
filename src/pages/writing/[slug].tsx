import { useMemo, FC } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { MDXEmbedProvider } from 'mdx-embed';
import NextLink from 'next/link';

import SyntaxHighlighter from 'features/code';
import { getAllArticles, getSingleArticle, Frontmatter } from 'utils/mdx';
import Flex from 'shared/flex';
import Heading from 'shared/heading';
import Link from 'shared/link';
import Text from 'shared/text';
import PageLayout from 'layout/page-layout';

const components = {
  code: SyntaxHighlighter,
  h1: (props: any) => (
    <Heading as='h1' mt={4} mb={-4} fontSize='2xl' {...props} />
  ),
  h2: (props: any) => <Heading mt={4} mb={-5} fontSize='xl' {...props} />,
  h3: (props: any) => (
    <Heading as='h3' mt={4} mb={-5} fontSize='lg' {...props} />
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
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <PageLayout>
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
