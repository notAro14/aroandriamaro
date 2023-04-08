import { ElementType, ReactNode } from "react"
import * as styles from "./Text.css"

type Props = {
  children: ReactNode
  as?: ElementType
} & styles.Variants

export default function Text({
  children,
  as,
  weigth,
  size,
  lineHeight,
  decoration,
  family,
  color,
}: Props) {
  const Component = as ?? "p"
  const variants = { color, weigth, size, lineHeight, decoration, family }
  return <Component className={styles.text(variants)}>{children}</Component>
}
