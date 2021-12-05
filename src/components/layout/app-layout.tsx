import { FC } from 'react';
import { Box } from '@chakra-ui/react';

const AppLayout: FC = ({ children }) => {
  return (
    <Box as='section' bg='blackAlpha.800' color='gray.100'>
      {children}
    </Box>
  );
};

export default AppLayout;
