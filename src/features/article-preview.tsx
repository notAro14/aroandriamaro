import { FC } from 'react';
import NextLink from 'next/link';

import Box from 'shared/box';
import Heading from 'shared/heading';
import Link from 'shared/link';
import Text from 'shared/text';
import { format } from 'utils/date';

interface ArticlePreviewProps {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const ArticlePreview: FC<ArticlePreviewProps> = ({
  slug,
  title,
  description,
  date,
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
          backgroundColor='compBg'
          sx={{
            transition: 'box-shadow 200ms ease-in-out',
            ':hover': {
              boxShadow: 'md',
            },
          }}
        >
          <Text mb={2} color='gray' fontSize='xs'>
            {format(date, 'MMMM do, yyyy')}
          </Text>
          <Heading fontWeight={500} color='heading' mb={1} fontSize='2xl'>
            {title}
          </Heading>
          <Text mb={2}>{description}</Text>
          <Text color='brand'>Read more</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ArticlePreview;
