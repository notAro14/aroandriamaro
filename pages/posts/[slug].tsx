import { useMemo, FC } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';

import { getAllArticles, getSingleArticle } from '../../utils/mdx';

interface Props {
  post: {
    frontmatter: {
      [key: string]: any;
    };
    code: string;
    previousArticle: {
      frontmatter: {
        [key: string]: any;
      };
      slug: string;
    };
    nextArticle: {
      frontmatter: {
        [key: string]: any;
      };
      slug: string;
    };
  };
}

const Post: FC<Props> = ({ post }) => {
  const { code, frontmatter, nextArticle, previousArticle } = post;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <Component />
      {nextArticle && (
        <Link href={`/posts/${nextArticle.slug}`}>
          {nextArticle.frontmatter.title}
        </Link>
      )}
      {previousArticle && (
        <Link href={`/posts/${previousArticle.slug}`}>
          {previousArticle.frontmatter.title}
        </Link>
      )}
    </div>
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
