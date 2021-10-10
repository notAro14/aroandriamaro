import { FC, useState } from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import Fuse from 'fuse.js';

import { getAllArticles, Article } from '@/utils/mdx';
import { H1 } from '@/components/headings';
import ListOfArticles from '@/components/list-of-articles';
import PageLayout from '@/components/layout/page-layout';

interface Props {
  articles: Article[];
}

const HeroTitle: FC = ({ children }) => {
  return (
    <Flex
      as='section'
      w='100%'
      justifyContent='center'
      alignItems='center'
      borderBottom='solid 2px'
      borderColor='whiteAlpha.500'
      h='200px'
    >
      <H1
        textTransform='uppercase'
        color='whiteAlpha.700'
        fontSize={['6xl', '9xl']}
        letterSpacing={2}
        fontWeight={400}
      >
        {children}
      </H1>
    </Flex>
  );
};

const Writing: FC<Props> = ({ articles }) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [query, setQuery] = useState('');

  const fuse = new Fuse(articles, {
    minMatchCharLength: 2,
    keys: ['frontmatter.title', 'frontmatter.description'],
  });

  const handleChange = (value: string) => {
    setQuery(value);
    if (value === '') {
      setFilteredArticles(articles);
      return;
    }
    const fuseResult = fuse.search(value);
    setFilteredArticles(fuseResult.map(({ item }) => item));
  };

  return (
    <PageLayout>
      <Head>
        <title>Aro Andriamaro | Writing</title>
      </Head>
      <HeroTitle>Writing</HeroTitle>
      <Box
        m={['10px auto', '40px auto 20px auto']}
        as='form'
        w={[300, 400, 500, 1000]}
      >
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='yellow.300' />
          </InputLeftElement>
          <Input
            value={query}
            onChange={({ target: { value } }) => handleChange(value)}
            size='md'
            variant='flushed'
            focusBorderColor='yellow.300'
            placeholder='search an article'
          />
        </InputGroup>
      </Box>
      <ListOfArticles articles={filteredArticles} />
    </PageLayout>
  );
};

export const getStaticProps = () => {
  const articles = getAllArticles({ sorted: true });
  return { props: { articles } };
};

export default Writing;
