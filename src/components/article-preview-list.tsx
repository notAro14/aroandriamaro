import { FC } from 'react';
import { Flex } from 'theme-ui';

interface Props {}

const ArticlePreviewList: FC<Props> = ({ children }) => {
  return (
    <Flex
      as='ul'
      sx={{
        flexDirection: 'column',
        gap: 6,
        listStyleType: 'none',
        p: 0,
      }}
    >
      {children}
    </Flex>
  );
};

export default ArticlePreviewList;
