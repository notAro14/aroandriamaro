import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { getAllArticles } from 'utils/mdx';
import type { NextPageWithLayout } from 'types';
// components
import ArticlePreview from 'features/article-preview';
import PageLayout from 'layout/page-layout';
import PageHeading from 'features/page-heading';

export const getStaticProps = () => {
  const articles = getAllArticles({ sorted: true });
  return {
    props: {
      articles,
    },
  };
};

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const IndexPage: NextPageWithLayout<IndexPageProps> = (props) => {
  const { articles } = props;
  return (
    <>
      <Head>
        <title>Aro Andriamaro</title>
        <meta
          name='description'
          content='Blog about tech and web developement. It focuses on React and frontend development.'
        />
        <meta
          name='keywords'
          content='Javascript, Typescript, React, Next, CSS, Frameworks'
        />
      </Head>

      <PageHeading as='h1'>Blog</PageHeading>
      {articles.map(({ frontmatter: { title, description }, slug }) => (
        <ArticlePreview
          slug={slug}
          title={title}
          description={description}
          key={slug}
        />
      ))}
    </>
  );
};

IndexPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default IndexPage;
