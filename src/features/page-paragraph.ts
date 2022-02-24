import styled from '@emotion/styled';

import Text from 'shared/text';
import { sx } from 'utils/ui';

const PageParagraph = styled(Text)`
  ${sx({
    color: 'text',
    fontSize: ['md', 'lg'],
    my: 4,
  })}
`;

export default PageParagraph;
