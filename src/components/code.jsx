import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Box, Flex } from 'theme-ui';

const Language = ({ children }) => {
  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        color: 'hsl(208 15% 60%)',
        fontWeight: 'semi',
        textTransform: 'uppercase',
        mt: 4,
        py: 1,
        px: 2,
        fontFamily: 'body',
      }}
    >
      {children}
    </Box>
  );
};

const CodeBlockContainer = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
      }}
    >
      {children}
    </Flex>
  );
};

const Code = ({ children, ...props }) => {
  return (
    <Box
      as='pre'
      sx={{
        overflow: 'auto',
        p: 5,
        mb: 4,
        fontFamily: 'monospace',
        fontSize: 'sm',
        boxShadow: 'medium',
        borderRadius: 'md',
      }}
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
            {tokens.slice(0, -1).map((line, i) => (
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
