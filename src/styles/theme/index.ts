import type { Theme } from 'theme-ui';

export const theme: Theme = {
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
    monospace: '"IBM Plex Mono", monospace',
  },
  colors: {
    text: 'hsl(200 100% 95%)',
    background: 'hsl(190 100% 9%)',
    primary: 'hsl(180 100% 65%)',
    accent: 'hsl(40 100% 75%)',
    'dark-accent': 'hsl(35 100% 65%)',
    gray: 'hsl(208 15% 60%)',
  },
  radii: {
    sm: '2px',
    md: '6px',
    lg: '15px',
  },
  shadows: {
    low: 'var(--shadow-elevation-low)',
    medium: 'var(--shadow-elevation-medium)',
    high: 'var(--shadow-elevation-high)',
  },
  fontWeights: {
    thin: 100,
    light: 300,
    medium: 400,
    regular: 500,
    semi: 600,
    bold: 700,
    extra: 800,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
  },
  space: [
    0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768,
  ],
};
