import { FC } from "react"

import Anchor from "src/component/Anchor"
import Emoji from "src/component/emoji"
import Text from "src/component/Text"

import { LINKEDIN, GITHUB } from "src/constants"
import * as styles from "./Footer.css"

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <p className={styles.copyright}>
          <span>
            Made with <Emoji symbol="💙" ariaLabel="heart" /> by{" "}
          </span>
          <Anchor color="inherit" isExternal href={GITHUB.href}>
            notAro14
          </Anchor>
          <Text size="inherit" as="span">
            &copy;
            {new Date().getFullYear()}
          </Text>
        </p>
        <ul className={styles.socials}>
          {[GITHUB, LINKEDIN].map(({ name, href }) => {
            return (
              <li className={styles.social} key={name}>
                <Anchor color="inherit" isExternal href={href}>
                  {name}
                </Anchor>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
