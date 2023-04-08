import type { MDXContentProps } from "mdx-bundler/client"
import CodeBlock from "src/component/CodeBlock"
import * as styles from "./Mdx.css"
import Anchor from "src/component/Anchor"

export const MARKDOWN_COMPONENTS: MDXContentProps["components"] = {
  code: (props) =>
    typeof props.children === "string" ? (
      <CodeBlock {...props}>{props.children}</CodeBlock>
    ) : null,
  h1: (props) => <h1 className={styles.h1} {...props} />,
  h2: (props) => <h2 className={styles.h2} {...props} />,
  h3: (props) => <h3 className={styles.h3} {...props} />,
  h4: (props) => <h4 className={styles.h3} {...props} />,
  h5: (props) => <h5 className={styles.h3} {...props} />,
  h6: (props) => <h6 className={styles.h3} {...props} />,
  p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  em: ({ children }) => <em className={styles.paragraph}>{children}</em>,
  li: ({ children }) => <li className={styles.li}>{children}</li>,
  a: ({ href, children }) => (
    <Anchor isExternal href={href ?? "#"}>
      {children}
    </Anchor>
  ),
  ul: (props) => <ul className={styles.ul} {...props} />,
}

export default MARKDOWN_COMPONENTS
