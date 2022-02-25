import { FC } from 'react';
import { Global, css } from '@emotion/react';

const Font: FC = () => {
  return (
    <Global
      styles={css`
        /* Fira Code */
        @font-face {
          font-family: 'Fira Code';
          src: url('/fonts/FiraCode-Regular.ttf');
          font-weight: 400;
        }
        /* Metropolis */
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/metropolis.thin.otf');
          font-weight: 100;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/metropolis.extra-light.otf');
          font-weight: 200;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/metropolis.light.otf');
          font-weight: 300;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/metropolis.regular.otf');
          font-weight: 400;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/metropolis.medium.otf');
          font-weight: 500;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/metropolis.semi-bold.otf');
          font-weight: 600;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/metropolis.bold.otf');
          font-weight: 700;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/public/fonts/Metropolis/metropolis.extra-bold.otf');
          font-weight: 800;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/metropolis.black.otf');
          font-weight: 900;
        }
      `}
    />
  );
};

export default Font;
