import type { Theme } from 'types/ui';

const colors = {
  text: '#D4D8F0',
  background: '#232946',
  heading: '#FFFFFE',
  tint: '#EEBBC3',
};

const fonts = {
  text: '"Merriweather", serif',
  heading: '"Lato", sans-serif',
  code: '"IBM Plex Mono", monospace',
};

const fontSizes = {
  xxs: '0.512rem',
  xs: '0.64rem',
  sm: '0.8rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.563rem',
  '2xl': '1.953rem',
  '3xl': '2.441rem',
  '4xl': '3.052rem',
};

const radii = {
  sm: '2px',
  md: '6px',
  lg: '12px',
};

const space = [
  0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768,
];

export const theme: Theme = {
  colors,
  fonts,
  radii,
  fontSizes,
  space,
};
