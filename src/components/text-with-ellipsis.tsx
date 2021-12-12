import { FC } from 'react';
import Text, { Props } from '@/components/text';

const TextWithEllipsis: FC<Props> = ({ sx, ...rest }) => {
  return (
    <Text
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        ...sx,
      }}
      {...rest}
    />
  );
};

export default TextWithEllipsis;
