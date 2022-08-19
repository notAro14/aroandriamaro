import Highlight, { defaultProps } from "prism-react-renderer"
import prismTheme from "prism-react-renderer/themes/nightOwl"
import { CodeBlockLanguage, CodeBlockContainer, Pre } from "./code-block.styles"

const CodeBlock = ({ children, className }) => {
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
          <CodeBlockLanguage>{language}</CodeBlockLanguage>
          <Pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </CodeBlockContainer>
      )}
    </Highlight>
  )
}

export default CodeBlock
