import { FC, MouseEventHandler } from "react"

import BaseButton from "./base-button"

const IconButton: FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = ({
  children,
  onClick,
}) => {
  return (
    <BaseButton
      onClick={onClick}
      css={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        background: "none",
        border: "none",
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      {children}
    </BaseButton>
  )
}

export default IconButton
