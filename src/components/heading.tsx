import { FC } from 'react';
import { Heading as ThemeUIHeading, HeadingProps } from 'theme-ui';

interface Props extends HeadingProps {
  size?: string | string[];
}

const Heading: FC<Props> = ({ sx, size, color, ...rest }) => {
  return (
    <ThemeUIHeading
      sx={{
        fontSize: size || undefined,
        color: color || 'primary',
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Heading;
