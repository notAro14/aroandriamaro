import { useClipboard } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { MdContentCopy } from 'react-icons/md';

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <IconButton
      mr='4'
      mt='4'
      borderColor={hasCopied ? 'green.400' : 'yellow.400'}
      variant='outline'
      color={hasCopied ? 'green.400' : 'yellow.400'}
      _focus={{
        outline: 0,
      }}
      p='2'
      fontSize='xl'
      _hover={{
        backgroundColor: hasCopied ? 'green.900' : 'yellow.900',
      }}
      aria-label='Copy text'
      onClick={onCopy}
      fontFamily='body'
      icon={hasCopied ? <>Copied</> : <MdContentCopy />}
    />
  );
}
