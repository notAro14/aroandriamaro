import React from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { variant } from 'styled-system';

const Button = styled.button<{} & { variant?: string }>`
  border: 1px solid;
  padding: 4px 8px;
  border-radius: 4px;
  ${variant({
    variants: {
      filled: {
        backgroundColor: 'primary',
        color: 'white',
        borderColor: 'primary',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: 'primary',
        color: 'primary',
      },
    },
  })}
`;

const HStack = styled.div`
  background-color: white;
  padding: 1rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  border-radius: 20px;
`;

const theme = {
  colors: {
    primary: 'dodgerblue',
  },
};

export default function Variants() {
  return (
    <ThemeProvider theme={theme}>
      <HStack>
        <Button onClick={() => {}} variant='filled'>
          Filled
        </Button>
        <Button onClick={() => {}} variant='outlined'>
          Outlined
        </Button>
      </HStack>
    </ThemeProvider>
  );
}
