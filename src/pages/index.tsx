/** @jsxImportSource theme-ui */
import type { NextPage } from 'next';
import { FC } from 'react';
import Head from 'next/head';
import { BiHash } from 'react-icons/bi';

import { getAllArticles, Article } from '@/utils/mdx';
import ArticlePreviewList from '@/components/article-preview-list';
import Emoji from '@/components/emoji';
import Text from '@/components/text';
import Heading from '@/components/heading';
import { distanceToNow } from '@/utils/date';
import TextWithEllipsis from '@/components/text-with-ellipsis';
import ArticlePreview from '@/components/article-preview';

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

const Logo = () => {
  return (
    <Heading
      as='h1'
      color='accent'
      size={['3xl', '6xl']}
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'underline',
        my: 5,
      }}
    >
      <BiHash /> aroandriamaro.com
    </Heading>
  );
};

const ArticlePreviewDate: FC = ({ children }) => {
  return (
    <Text color='gray' size='sm'>
      {children}
    </Text>
  );
};

const ArticlePreviewTitle: FC = ({ children }) => {
  return (
    <Heading
      as='h3'
      color='background'
      sx={{
        textTransform: 'uppercase',
        fontWeight: 'extra',
      }}
    >
      {children}
    </Heading>
  );
};

const ArticlePreviewDescription: FC = ({ children }) => {
  return <TextWithEllipsis color='background'>{children}</TextWithEllipsis>;
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Aro Andriamaro | Frontend developer</title>
        <meta name='description' content="Aro Andriamaro's personal website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Logo />
      <Heading size='3xl' mt={4} mb={-4}>
        <Emoji symbol='💻' ariaLabel='laptop' /> About me
      </Heading>
      <Text my={5}>
        Hi, I&apos;m Aro, a software developer based in Lyon, France.
      </Text>
      <Heading size='3xl' mt={4} mb={-4}>
        <Emoji ariaLabel='pencil' symbol='✏️' /> Blog
      </Heading>
      <Text my={5}>I write some stuff about web development (mostly).</Text>
      <ArticlePreviewList>
        {articles.map((article) => {
          return (
            <ArticlePreview
              articleUrl={`/writing/${article.slug}`}
              key={article.slug}
            >
              <ArticlePreviewDate>
                {`${distanceToNow(article.frontmatter.date)} ago`}
              </ArticlePreviewDate>
              <ArticlePreviewTitle>
                {article.frontmatter.title}
              </ArticlePreviewTitle>
              <ArticlePreviewDescription>
                {article.frontmatter.description}
              </ArticlePreviewDescription>
            </ArticlePreview>
          );
        })}
      </ArticlePreviewList>
    </>
  );
};

export default Home;
