import { FC } from 'react';
import NextLink from 'next/link';

import Box from 'shared/box';
import Heading from 'shared/heading';
import Link from 'shared/link';
import Text from 'shared/text';

interface ArticlePreviewProps {
  slug: string;
  title: string;
  description: string;
}

const ArticlePreview: FC<ArticlePreviewProps> = ({
  slug,
  title,
  description,
}) => {
  return (
    <NextLink href={`/writing/${slug}`} passHref>
      <Link
        title={title}
        fontSize='inherit'
        textDecoration='none'
        color='inherit'
      >
        <Box
          as='article'
          mb={6}
          padding={4}
          boxShadow='sm'
          borderRadius='md'
          sx={{
            transition: 'box-shadow 200ms ease-in-out',
            ':hover': {
              boxShadow: 'md',
            },
          }}
        >
          <Heading
            fontWeight={500}
            fontFamily='secondary'
            color='heading'
            mb={1}
            fontSize='2xl'
          >
            {title}
          </Heading>
          <Text color='text' mb={2} fontSize='lg' fontWeight={100}>
            {description}
          </Text>
          <Text
            fontWeight={100}
            color='tint'
            textDecoration='underline'
            fontSize='lg'
          >
            Read more
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ArticlePreview;
