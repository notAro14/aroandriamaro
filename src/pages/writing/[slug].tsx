import { useMemo, FC } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

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
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Component />
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
