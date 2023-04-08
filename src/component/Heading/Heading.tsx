import { ElementType, ReactNode } from "react"
import { heading, HeadingVariants } from "./Heading.css"

type Props = {
  children: ReactNode
  as?: ElementType
} & HeadingVariants

export default function Heading(props: Props) {
  const { color, size, children, as } = props
  const Component = as ?? "span"
  return <Component className={heading({ color, size })}>{children}</Component>
}
