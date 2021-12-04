import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  Link,
  LinkProps,
  Tooltip,
} from '@chakra-ui/react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { FC } from 'react';

interface SocialButtonProps extends LinkProps {
  label: string;
}

const SocialButton: FC<SocialButtonProps> = ({ children, label, href }) => {
  return (
    <Tooltip
      placement='top'
      label={label}
      bg='yellow.300'
      color='blackAlpha.700'
    >
      <Link
        rounded='full'
        w={6}
        h={6}
        cursor='pointer'
        isExternal
        href={href}
        display='inline-flex'
        alignItems='center'
        justifyContent='center'
        transition='all ease-in-out 150ms'
        _hover={{
          bg: 'yellow.300',
          color: 'blackAlpha.700',
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Link>
    </Tooltip>
  );
};

export default function Footer() {
  return (
    <Box
      as='footer'
      color='brand.grey'
      borderTop='2px solid'
      borderColor='whiteAlpha.500'
    >
      <Container
        as={Stack}
        maxW='6xl'
        direction='row'
        spacing={4}
        justify='space-between'
        align='center'
        h='50px'
      >
        <Text>@{new Date().getFullYear()} - Aro Andriamaro</Text>
        <Stack direction='row' spacing={6}>
          <SocialButton label='Twitter' href='https://twitter.com/notarodev'>
            <FaTwitter />
          </SocialButton>
          <SocialButton label='GitHub' href='https://github.com/notAro14'>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
