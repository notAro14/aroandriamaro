import Image from "next/image"
import * as styles from "./Cover.css"

interface Props {
  src: string
  alt: string
  author: string
  originalUrl: string
}

export default function CoverImg({ src, alt, author, originalUrl }: Props) {
  return (
    <figure className={styles.imageContainer}>
      <Image src={src} alt={alt} className={styles.image} fill />
      <figcaption className={styles.figcaption}>
        Photo by{" "}
        <a
          className={styles.author}
          href={originalUrl}
          target="_blank"
          rel="noreferrer"
        >
          {author}
        </a>
      </figcaption>
    </figure>
  )
}
