import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { SystemStyleProps } from 'types/ui';
import { getSystemStyleProps, sx } from 'utils/ui';

const Link = styled('a', { shouldForwardProp })<SystemStyleProps>`
  ${sx({ fontWeight: 200, fontFamily: 'primary' })}
  ${getSystemStyleProps()}
  ${(props) => sx(props.sx)}
`;

export default Link;
