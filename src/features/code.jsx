import Highlight, { defaultProps } from "prism-react-renderer"
import prismTheme from "prism-react-renderer/themes/nightOwl"
import Box from "src/shared/box"
import Flex from "src/shared/flex"
import { theme } from "src/lib/stitches.config"

const Language = ({ children }) => {
  return (
    <Flex
      css={{
        alignSelf: "flex-start",
        color: "$text-lo",
        textTransform: "uppercase",
        marginTop: theme.space.md,
        paddingTop: theme.space.xxs,
        paddingBottom: theme.space.xxs,
        paddingRight: theme.space.xs,
        paddingLeft: theme.space.xs,
        fontFamily: "$tertiary",
      }}
    >
      {children}
    </Flex>
  )
}

const CodeBlockContainer = ({ children }) => {
  return (
    <Flex
      css={{
        flexDirection: "column",
      }}
    >
      {children}
    </Flex>
  )
}

const Code = ({ children, ...props }) => {
  return (
    <Box
      css={{
        overflow: "auto",
        padding: theme.space.lg,
        marginBottom: theme.space.md,
        fontFamily: "$tertiary",
        fontSize: theme.fontSizes.lg,
        borderRadius: theme.radii.lg,
      }}
      as="pre"
      {...props}
    >
      {children}
    </Box>
  )
}

const SyntaxHighlighter = ({ children, className }) => {
  const code = children.trim()
  const language = className !== undefined && className.replace(/language-/, "")

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={prismTheme}
    >
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
  )
}

export default SyntaxHighlighter
