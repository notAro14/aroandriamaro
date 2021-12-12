import { FC } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Link } from 'theme-ui';

interface Props {
  articleUrl: string;
}

const ArticlePreview: FC<Props> = ({ children, articleUrl }) => {
  return (
    <Box
      as='li'
      sx={{
        boxShadow: 'medium',
        py: 2,
        px: 4,
        borderRadius: 'md',
        backgroundColor: 'text',
        color: 'background',
        textDecoration: 'none',
        fontWeight: 'semi',
        width: ['100%', '75%', '50%'],
      }}
    >
      <Flex
        as='article'
        sx={{
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box as='header'>{children}</Box>
        <NextLink href={articleUrl} passHref>
          <Link>Read more</Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default ArticlePreview;
