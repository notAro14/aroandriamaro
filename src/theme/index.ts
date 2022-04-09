export const modes = {
  light: {
    background: '#fff',
    text: 'hsl(229.7 33.3% 20.6%)',
    shadow: 'hsl(229.7 33.3% 2.5% / 33%)',
    heading: 'hsl(60, 100%, 9.8%)',
    tint: 'hsl(306.5, 77.8%, 37.1%)',
  },
  dark: {
    text: 'hsl(231.4, 48.3%, 88.6%)',
    background: 'hsl(229.7 33.3% 20.6%)',
    shadow: 'hsl(229.7 33.3% 2.5% / 33%)',
    heading: 'hsl(60, 100%, 99.8%)',
    tint: 'hsl(351deg 60% 83%)',
  },
};

const colors = {
  text: '#D4D8F0',
  background: 'hsl(229.7 33.3% 20.6%)',
  shadow: 'hsl(229.7 33.3% 2.5% / 33%)',
  heading: '#FFFFFE',
  tint: 'hsl(351deg 60% 83%)',
  modes,
};

const fonts = {
  secondary: '"Metropolis", serif',
  primary: '"Metropolis", sans-serif',
  code: '"Fira Code", monospace',
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
  lg: '20px',
};

const space = [
  0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768,
];

export const theme = {
  colors,
  fonts,
  radii,
  fontSizes,
  space,
  shadows: {
    sm: `0px 1px 1px ${colors.shadow}, 0px 1px 2px ${colors.shadow}, 0px 1px 3px ${colors.shadow}`,
    md: `2px 4px 6px ${colors.shadow}, 2px 4px 7px ${colors.shadow}`,
  },
};
