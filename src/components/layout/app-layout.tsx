import { FC } from 'react';
import { Box } from '@chakra-ui/react';

const AppLayout: FC = ({ children }) => {
  return (
    <Box bg='blackAlpha.800' as='main' color='gray.100'>
      {children}
    </Box>
  );
};

export default AppLayout;
