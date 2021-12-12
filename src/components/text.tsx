import { FC } from 'react';
import { Text as ThemeUIText, TextProps } from 'theme-ui';

export interface Props extends TextProps {
  size?: string | string[];
}

const Text: FC<Props> = ({ size, color, as, sx, ...rest }) => {
  return (
    <ThemeUIText
      as={as ? as : 'p'}
      sx={{
        fontSize: size ? size : 'lg',
        color: color ? color : 'text',
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Text;
