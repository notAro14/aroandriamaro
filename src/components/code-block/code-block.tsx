import Highlight, { defaultProps, Language } from "prism-react-renderer"
import prismTheme from "prism-react-renderer/themes/nightOwl"
import { FC } from "react"
import { CodeBlockLanguage, CodeBlockContainer, Pre } from "./code-block.styles"

interface Props {
  children: string
  className?: string
}

const CodeBlock: FC<Props> = ({ children, className }) => {
  const code = children ? children?.trim() : ("" as string)
  const language = (
    className !== undefined ? className.replace(/language-/, "") : ""
  ) as Language

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
