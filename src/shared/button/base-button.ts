import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { SystemStyleProps } from 'types/ui';
import { getSystemStyleProps, sx } from 'utils/ui';

const BaseButton = styled('button', { shouldForwardProp })<SystemStyleProps>`
  ${sx({
    fontFamily: 'primary',
    lineHeight: '1',
  })}
  ${getSystemStyleProps()}
  ${(props) => sx(props.sx)}
`;

export default BaseButton;
