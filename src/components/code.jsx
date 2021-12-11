import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/okaidia';
import { Box, Flex } from 'theme-ui';

const SyntaxHighlighter = ({ children, className }) => {
  const code = children.trim();
  const language =
    className !== undefined && className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Flex
          sx={{
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              textTransform: 'uppercase',
              mt: '1rem',
              backgroundColor: 'tomato',
              fontWeight: 900,
              fontFamily: 'body',
              ':before': {
                content: '"<"',
              },
              ':after': {
                content: '">"',
              },
            }}
          >
            {language}
          </Box>
          <Box
            as='pre'
            sx={{
              overflow: 'auto',
              p: '1.2rem',
              borderRadius: '15px',
              mb: '1rem',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              boxShadow:
                '2px 4px 4px hsl(0 5% 30% / 0.25), 3px 6px 6px hsl(0 5% 30% / 0.25), 4px 8px 8px hsl(0 5% 30% / 0.25)',
            }}
            className={className}
            style={{ ...style }}
          >
            {tokens.slice(0, -1).map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Box>
        </Flex>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
