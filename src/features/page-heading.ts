import styled from '@emotion/styled';

import Heading from 'shared/heading';
import { sx } from 'utils/ui';

const PageHeading = styled(Heading)`
  ${sx({
    color: 'heading',
    fontFamily: 'secondary',
    fontWeight: 900,
    fontSize: '3xl',
    mb: 4,
  })}
`;

export default PageHeading;
