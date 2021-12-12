import { FC } from 'react';
import Text, { Props as TextProps } from '@/components/text';

interface Props extends TextProps {
  maxLineNumber: number;
}

const TextWithEllipsis: FC<Props> = ({ sx, maxLineNumber, ...rest }) => {
  return (
    <Text
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: maxLineNumber,
        WebkitBoxOrient: 'vertical',
        ...sx,
      }}
      {...rest}
    />
  );
};

export default TextWithEllipsis;
