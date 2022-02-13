import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { SystemStyleProps } from 'types/ui';
import { getSystemStyleProps, sx } from 'utils/ui';

const Heading = styled('h2', { shouldForwardProp })<SystemStyleProps>`
  ${sx({
    color: 'heading',
    fontFamily: 'heading',
  })}
  ${getSystemStyleProps()}
  ${(props) => sx(props.sx)}
`;

export default Heading;
