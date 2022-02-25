import { FC } from 'react';
import { Global, css } from '@emotion/react';

const Font: FC = () => {
  return (
    <Global
      styles={css`
        /* Fira Code */
        @font-face {
          font-family: 'Fira Code';
          src: url('/fonts/fira-code.regular.ttf');
          font-weight: 400;
        }
        /* Metropolis */
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.thin.otf');
          font-weight: 100;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.extra-light.otf');
          font-weight: 200;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.light.otf');
          font-weight: 300;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.regular.otf');
          font-weight: 400;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.medium.otf');
          font-weight: 500;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.semi-bold.otf');
          font-weight: 600;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.bold.otf');
          font-weight: 700;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.extra-bold.otf');
          font-weight: 800;
        }
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/metropolis/metropolis.black.otf');
          font-weight: 900;
        }
      `}
    />
  );
};

export default Font;
