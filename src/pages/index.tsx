import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import { getAllArticles } from 'utils/mdx';
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

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { articles } = props;
  return (
    <>
      <Head>
        <title>Aro Andriamaro | Blog</title>
        <meta name='description' content="Aro Andriamaro's personal website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageLayout>
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
      </PageLayout>
    </>
  );
};

export default Home;
