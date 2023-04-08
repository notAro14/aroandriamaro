import * as styles from "./Spacer.css"

type Props = {
  foo?: "foo"
} & styles.Variants

export default function Spacer({ size }: Props) {
  return <div className={styles.size({ size })} />
}
