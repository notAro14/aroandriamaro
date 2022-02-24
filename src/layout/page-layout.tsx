import { FC } from 'react';

import ContentLayout from 'layout/content-layout';
import Flex from 'shared/flex';
import Footer from 'layout/footer';
import Header from 'layout/header';

const PageLayout: FC = ({ children }) => {
  return (
    <Flex
      flexDirection='column'
      fontFamily='primary'
      backgroundColor='background'
      minHeight='100%'
    >
      <Header />
      <ContentLayout>{children}</ContentLayout>
      <Footer />
    </Flex>
  );
};

export default PageLayout;
