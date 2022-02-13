import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { SystemStyleProps } from 'types/ui';
import { getSystemStyleProps, sx } from 'utils/ui';

const Text = styled('p', { shouldForwardProp })<SystemStyleProps>`
  ${sx({
    color: 'text',
    fontFamily: 'text',
  })}
  ${getSystemStyleProps()}
  ${(props) => sx(props.sx)}
`;

export default Text;
