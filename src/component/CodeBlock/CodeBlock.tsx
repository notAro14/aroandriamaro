import { FC } from "react"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import prismTheme from "prism-react-renderer/themes/dracula"

import Flex from "src/component/Flex"
import * as styles from "./CodeBlock.css"

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
          <Flex direction="column">
            <span className={styles.language}>{language}</span>
            <pre className={styles.pre + " " + className} style={{ ...style }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </Flex>
        )
      }}
    </Highlight>
  )
}

export default CodeBlock
