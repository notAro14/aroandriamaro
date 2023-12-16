import { FC } from "react"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import prismTheme from "prism-react-renderer/themes/dracula"

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
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={className}
            style={{
              ...style,
              padding: "var(--space-4)",
              borderRadius: "var(--radius-4)",
              overflow: "auto",
              margin: "var(--space-4) 0",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )
      }}
    </Highlight>
  )
}

export default CodeBlock
