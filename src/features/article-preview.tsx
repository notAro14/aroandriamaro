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
        <Box as='article'>
          <Heading fontFamily='secondary' color='heading' mb={1} fontSize='xl'>
            {title}
          </Heading>
          <Text color='text' mb={3} fontSize={['md', 'lg']}>
            {description}
          </Text>
          <Text color='tint' textDecoration='underline' fontSize='md'>
            Read more
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ArticlePreview;
