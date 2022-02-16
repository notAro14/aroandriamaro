import { FC, ElementType } from 'react';

import Box from 'shared/box';
import Flex from 'shared/flex';
import Footer from 'layout/footer';
import Header from 'layout/header';

interface PageLayoutProps {
  as?: ElementType;
}

const PageLayout: FC<PageLayoutProps> = ({ children, as = 'section' }) => {
  return (
    <Flex
      flexDirection='column'
      as={as}
      minHeight='100%'
      backgroundColor='background'
    >
      <Header />
      <Box
        p={4}
        as='main'
        minHeight='calc(100% - 125px)'
        width={['100%', '100%', '1000px']}
        m='auto'
        flex='1'
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default PageLayout;
