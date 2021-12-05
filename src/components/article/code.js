import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Flex } from '@chakra-ui/react';
import CopyButton from '../copy-button';

const Code = ({ children, className }) => {
  const language =
    className !== undefined && className.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children?.trim()}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <Flex position='relative' direction='column' my={6}>
          <Flex
            borderTop='solid 1px white'
            borderLeft='solid 1px white'
            borderRight='solid 1px white'
            justifyContent='flex-end'
          >
            <CopyButton />
          </Flex>
          <Flex
            as='pre'
            className={className}
            direction='column'
            overflow='auto'
            overflowY='hidden'
            mb='4'
            px='6'
            pb='6'
            position='relative'
            borderRight='solid 1px white'
            borderBottom='solid 1px white'
            borderLeft='solid 1px white'
            css={`
              &::-webkit-scrollbar {
                width: 5px;
              }
              &::-webkit-scrollbar-track {
                background-color: #ededed;
              }
              &::-webkit-scrollbar-thumb {
                background-color: #1a1a1a;
                border-radius: 10px;
                background-clip: content-box;
                border: 3px solid transparent;
              }
            `}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Flex>
        </Flex>
      )}
    </Highlight>
  );
};

export default Code;
