import { FC } from 'react';
import { Flex, useMediaQuery, Box } from '@chakra-ui/react';
import { CgMenuGridO } from 'react-icons/cg';

import Footer from '@/components/footer';
import NavigationBar from '@/components/navigation-bar';

const PageLayout: FC = ({ children }) => {
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  return (
    <>
      {isMobile ? (
        <Box
          position='fixed'
          right='10px'
          fontSize='xl'
          color='yellow.300'
          top='10px'
          border='solid 2px'
          borderColor='whiteAlpha.500'
          rounded='full'
          p='5px'
        >
          <CgMenuGridO />
        </Box>
      ) : (
        <NavigationBar />
      )}
      <Flex
        as='section'
        minH={isMobile ? 'calc(100vh - 50px)' : 'calc(100vh - 100px)'}
        direction='column'
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default PageLayout;
