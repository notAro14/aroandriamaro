import { FC } from 'react';

import ContentLayout from 'shared/layout/content-layout';
import Flex from 'shared/flex';
import Footer from 'shared/layout/footer';
import Header from 'shared/layout/header';

const PageLayout: FC = ({ children }) => {
  return (
    <Flex
      flexDirection='column'
      backgroundColor='background'
      minHeight='100%'
      as='section'
    >
      <Header />
      <ContentLayout>{children}</ContentLayout>
      <Footer />
    </Flex>
  );
};

export default PageLayout;
