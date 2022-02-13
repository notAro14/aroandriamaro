import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { SystemStyleProps } from 'types/ui';
import { getSystemStyleProps, sx } from 'utils/ui';

const Link = styled('a', { shouldForwardProp })<SystemStyleProps>`
  ${sx({
    color: 'tint',
    fontFamily: 'heading',
    textDecoration: 'underline',
  })}
  ${getSystemStyleProps()}
  ${(props) => sx(props.sx)}
`;

export default Link;
