import { Text, Heading, List, ListItem } from '@chakra-ui/react';

import Link from '@/components/link';
import Code from '@/components/article/code';

const components = {
  p: (props: any) => <Text my='5' fontSize='lg' lineHeight='1.5' {...props} />,
  h2: (props: any) => (
    <Heading as='h2' color='yellow.300' mb='-4' mt='8' {...props} />
  ),
  h3: (props: any) => (
    <Heading
      as='h3'
      fontSize='xl'
      color='yellow.300'
      mb='-4'
      mt='8'
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      as='h4'
      fontSize='lg'
      color='yellow.300'
      mb='-4'
      mt='8'
      {...props}
    />
  ),
  a: (props: any) => (
    <Link color='yellow.300' pb='1' href={props.href}>
      {props.children}
    </Link>
  ),
  strong: (props: any) => (
    <Text as='strong' fontWeight='semi-bold' color='pink.400' {...props} />
  ),
  em: (props: any) => <Text as='em' color='pink.400' {...props} />,
  code: (props: any) => <Code {...props} />,
  ul: (props: any) => <List {...props} />,
  li: (props: any) => <ListItem {...props} />,
};

export default components;
