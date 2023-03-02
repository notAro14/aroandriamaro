import { size, Size } from "./Spacer.css"

interface Props {
  size?: Size
}

export default function Spacer(props: Props) {
  return <div className={size[props.size ?? "md"]} />
}
