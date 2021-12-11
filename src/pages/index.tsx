/** @jsxImportSource theme-ui */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getAllArticles, Article } from '@/utils/mdx';

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

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Aro Andriamaro | Frontend developer</title>
        <meta name='description' content="Aro Andriamaro's personal website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Aro Andriamaro</h1>
      <h2>About me</h2>
      <p>Hi, I&apos;m Aro, a software developer based in Lyon, France.</p>
      <h2>Blog</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.slug}>
              <Link href={`/writing/${article.slug}`}>
                {article.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
