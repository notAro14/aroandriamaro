import { useMemo, FC } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { Box } from '@chakra-ui/react';

import Link from '@/components/link';
import components from '@/components/article/components';
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
  const { code, nextArticle, previousArticle, frontmatter } = post;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Box as='main' minH='100vh' w='100vw'>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Box p='4' w={['100%', 400, 500, 1000]} m='auto' as='article'>
        <Component components={components} />
      </Box>
      {nextArticle && (
        <Link href={`/writing/${nextArticle.slug}`}>
          {nextArticle.frontmatter.title}
        </Link>
      )}
      {previousArticle && (
        <Link href={`/writing/${previousArticle.slug}`}>
          {previousArticle.frontmatter.title}
        </Link>
      )}
    </Box>
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
