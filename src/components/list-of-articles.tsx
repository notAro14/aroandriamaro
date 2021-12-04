import { FC } from 'react';
import { Box, UnorderedList, Text } from '@chakra-ui/react';

import ArticlePreview from '@/components/article-preview';
import { Article } from '@/utils/mdx';

interface Props {
  articles: Article[];
}

const ListOfArticles: FC<Props> = ({ articles }) => {
  return (
    <Box
      as='main'
      w={[300, 400, 500, 1000]}
      m={['2rem auto', '0 1rem', '0 auto']}
      h='100%'
    >
      {articles.length ? (
        <UnorderedList listStyleType='none' m={0}>
          {articles.map(({ slug, frontmatter }) => (
            <ArticlePreview key={slug} slug={slug} frontmatter={frontmatter} />
          ))}
        </UnorderedList>
      ) : (
        <Text fontSize='xl'>Oops, there is no match.</Text>
      )}
    </Box>
  );
};

export default ListOfArticles;
