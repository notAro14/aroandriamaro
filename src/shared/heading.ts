import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { SystemStyleProps } from 'types/ui';
import { getSystemStyleProps, sx } from 'utils/ui';

const Heading = styled('h2', { shouldForwardProp })<SystemStyleProps>`
  ${sx({
    lineHeight: '1',
    fontWeight: 500,
    color: 'text',
    fontFamily: 'secondary',
  })}
  ${getSystemStyleProps()}
  ${(props) => sx(props.sx)}
`;

export default Heading;
