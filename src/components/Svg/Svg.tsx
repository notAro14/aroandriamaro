import { ReactNode } from "react"
import { svg } from "./Svg.css"

interface Props {
  children: ReactNode
}

export default function Svg(props: Props) {
  return <svg className={svg}>{props.children}</svg>
}
