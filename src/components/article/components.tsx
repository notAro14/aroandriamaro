import Link from '@/components/link';

import { H1, H2, H3, H4 } from '@/components/article/headings';
import Code from '@/components/codeblock/code';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  a: (props: any) => <Link href={props.href}>{props.children}</Link>,
  code: (props: any) => <Code {...props} />,
};

export default components;
