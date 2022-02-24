import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import { getAllArticles } from 'utils/mdx';
import type { NextPageWithLayout } from 'types';
// components
import Box from 'shared/box';
import Heading from 'shared/heading';
import Link from 'shared/link';
import PageLayout from 'layout/page-layout';
import Text from 'shared/text';

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

      <Heading mb={4} fontSize='3xl'>
        Blog
      </Heading>
      {articles.map(({ frontmatter: { title, description }, slug }) => (
        <Box key={slug} as='article'>
          <NextLink href={`/writing/${slug}`} passHref>
            <Link fontSize='inherit' textDecoration='none' color='inherit'>
              <Heading mb={1} fontSize='xl'>
                {title}
              </Heading>
              <Text mb={3} fontSize={['md', 'lg']}>
                {description}
              </Text>
              <Text color='tint' textDecoration='underline' fontSize='md'>
                Read more
              </Text>
            </Link>
          </NextLink>
        </Box>
      ))}
    </>
  );
};

IndexPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default IndexPage;
