import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { getAllArticles } from 'utils/mdx';
import type { NextPageWithLayout } from 'types';
// components
import ArticlePreview from 'features/article-preview';
import PageLayout from 'shared/layout/page-layout';
import PageHeading from 'features/page-heading';
import Text from 'shared/text';
import Emoji from 'features/emoji';
import Box from 'shared/box';
import Flex from 'shared/flex';
import Link from 'shared/link';
import { SOCIAL_LINKS } from 'shared/layout/footer/footer';

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
      <Box
        as='header'
        borderBottom='1px solid'
        borderBottomColor='text'
        paddingBottom={5}
        marginBottom={5}
      >
        <PageHeading as='h1'>
          Welcome, Bienvenue, Tongasoa{' '}
          <Emoji symbol='👋🏼' ariaLabel='waving hand' />
        </PageHeading>
        <Text fontSize='lg' color='text' mb={4}>
          Welcome to my blog (yet another dev blog) . My name is Aro, I am a
          Frontend Developer based in Lyon, France.
        </Text>
        <Text fontSize='lg' color='text' mb={4}>
          This blog is my attempt to make the world a better place by sharing my
          modest knowledge in Web development. I write mostly about Frontend dev
          and React.
        </Text>
        <Flex as='ul' gap={4}>
          {SOCIAL_LINKS.map(({ name, href }) => {
            return (
              <li key={name}>
                <Link textDecoration='none' color='tint' href={href}>
                  {name}
                </Link>
              </li>
            );
          })}
        </Flex>
      </Box>

      <Flex as='ul' flexDirection='column' gap={4}>
        {articles.map(({ frontmatter: { title, description }, slug }) => (
          <li key={slug}>
            <ArticlePreview
              slug={slug}
              title={title}
              description={description}
            />
          </li>
        ))}
      </Flex>
    </>
  );
};

IndexPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default IndexPage;
