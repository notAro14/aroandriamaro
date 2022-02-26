import styled from '@emotion/styled';

import Heading from 'shared/heading';
import { sx } from 'utils/ui';

const PageHeading = styled(Heading)`
  ${sx({
    color: 'heading',
    fontFamily: 'secondary',
    fontWeight: 900,
    fontSize: '4xl',
    mb: 4,
  })}
`;

export default PageHeading;
