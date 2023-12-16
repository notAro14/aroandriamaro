import { ReactNode } from "react"
import Link from "next/link"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import * as styles from "./Anchor.css"

type Props = {
  children: ReactNode
  href: string
} & styles.Variants

export default function Anchor({ href, children, isExternal, color }: Props) {
  return isExternal ? (
    <a
      target="_blank"
      rel="noreferrer"
      className={styles.anchor({ isExternal, color })}
      href={href}
    >
      {children}
      <ExternalLinkIcon />
    </a>
  ) : (
    <Link href={href} className={styles.anchor({ color })}>
      {children}
    </Link>
  )
}
