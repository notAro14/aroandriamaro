import { FC } from 'react';
import { Flex, UnorderedList, ListIcon, ListItem } from '@chakra-ui/layout';
import { CgProfile, CgHashtag } from 'react-icons/cg';
import { BsPencil } from 'react-icons/bs';
import { useRouter } from 'next/router';

import Link from '@/components/link';

const NavigationBar: FC = () => {
  const { pathname } = useRouter();
  return (
    <Flex
      as='nav'
      direction='row'
      alignItems='center'
      justifyContent='center'
      borderBottom='2px solid'
      borderBottomColor='whiteAlpha.500'
      h='50px'
    >
      <Flex
        as={UnorderedList}
        alignItems={['flex-start', 'center']}
        justifyContent='space-around'
        listStyleType='none'
        direction={['column', 'row']}
        w='100%'
      >
        <ListItem>
          <ListIcon color='yellow.300' fontSize='lg' as={CgHashtag} />
          <Link color={pathname === '/' ? 'yellow.300' : 'inherit'} href='/'>
            aroandriamaro.com
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon color='yellow.300' fontSize='lg' as={BsPencil} />
          <Link
            color={pathname === '/writing' ? 'yellow.300' : 'inherit'}
            href='/'
          >
            writing
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon color='yellow.300' fontSize='lg' as={CgProfile} />
          <Link
            textDecoration='line-through'
            //href='/about'
            href='/#'
          >
            about me
          </Link>
        </ListItem>
      </Flex>
    </Flex>
  );
};

export default NavigationBar;
