import { FC } from 'react';
import { FaSlackHash } from 'react-icons/fa';
import { Text, ListItem, ListIcon } from '@chakra-ui/react';
import Link from '@/components/link';

import { Article } from '@/utils/mdx';

const ArticlePreview: FC<Article> = ({ slug, frontmatter }) => (
  <ListItem key={slug} my={5} w='fit-content'>
    <ListIcon fontSize={['lg', 'xl']} color='yellow.300' as={FaSlackHash} />
    <Link
      fontSize={['md', 'lg', 'xl']}
      textTransform='uppercase'
      href={`/writing/${slug}`}
      letterSpacing={2}
      fontWeight={400}
      _focus={{
        outline: 0,
      }}
    >
      {frontmatter.title}
    </Link>
    <Text fontSize={['sm', 'md']}>{frontmatter.description}</Text>
  </ListItem>
);

export default ArticlePreview;
