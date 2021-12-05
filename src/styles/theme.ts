import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Merriweather',
    body: 'Inter',
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
      },
    },
  },

  // colors: {
  //   brand: {
  //     silver: '#959595',
  //     // silver: "#7A7A7A",
  //     grey: '#EDEDED',
  //     orange: '#FF9D00',
  //     white: '#F4F4F4',
  //     black: '#1A1A1A',
  //   },
  // },
});
