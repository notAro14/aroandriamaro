import { ElementType, ReactNode } from "react"
import * as styles from "./Flex.css"

type Props = {
  children: ReactNode
  as?: ElementType
} & styles.Variants

export default function Flex({
  children,
  as,
  direction,
  gap,
  align,
  justify,
  wrap,
}: Props) {
  const Component = as ?? "div"
  const variants = { direction, gap, align, justify, wrap }
  return <Component className={styles.flex(variants)}>{children}</Component>
}
