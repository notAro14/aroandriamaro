import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Box from 'shared/box';
import Flex from 'shared/flex';

const Language = ({ children }) => {
  return (
    <Flex
      alignSelf='flex-start'
      color='tint'
      textTransform='uppercase'
      mt={4}
      py={1}
      px={2}
      fontFamily='code'
    >
      {children}
    </Flex>
  );
};

const CodeBlockContainer = ({ children }) => {
  return <Flex flexDirection='column'>{children}</Flex>;
};

const Code = ({ children, ...props }) => {
  return (
    <Box
      as='pre'
      overflow='auto'
      p={5}
      mb={4}
      fontFamily='code'
      fontSize='lg'
      borderRadius='lg'
      boxShadow='sm'
      {...props}
    >
      {children}
    </Box>
  );
};

const SyntaxHighlighter = ({ children, className }) => {
  const code = children.trim();
  const language =
    className !== undefined && className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeBlockContainer>
          <Language>{language}</Language>
          <Code className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Code>
        </CodeBlockContainer>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
