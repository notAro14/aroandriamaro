import { useState } from "react"
import styled from "@emotion/styled"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { whiteA, blue, blackA, red } from "@radix-ui/colors"

const Overlay = styled(DialogOverlay)({
  backgroundColor: blackA.blackA12,
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "grid",
  placeItems: "center",
})

const Content = styled(DialogContent)({
  backgroundColor: whiteA.whiteA12,
  padding: "1rem",
  minWidth: 300,
  borderRadius: 5,
})

const Container = styled("div")({
  placeItems: "center",
  backgroundColor: whiteA.whiteA12,
  borderRadius: 20,
  display: "grid",
  width: "100%",
  height: 100,
  margin: "2rem 0",
  fontFamily: '"Metropolis", sans-serif',
})

const Button = styled("button")({
  "padding": ".25rem .75rem",
  "border": "none",
  "color": whiteA.whiteA12,
  "backgroundColor": blue.blue9,
  "borderRadius": 5,
  "fontFamily": '"Metropolis", sans-serif',
  "textTransform": "uppercase",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: blue.blue10,
  },
})

const CloseButton = styled(Button)({
  "backgroundColor": red.red9,
  "width": "100%",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: red.red10,
  },
})

const DialogTitle = styled("h2")({
  fontFamily: '"Metropolis", sans-serif',
  lineHeight: "1",
  color: blackA.blackA12,
})

const DialogDescription = styled("p")({
  fontFamily: '"Metropolis", sans-serif',
  lineHeight: "1",
  marginTop: ".5rem",
  marginBottom: "1rem",
  color: blackA.blackA12,
})

const ReachDialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const show = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return (
    <Container>
      <Button onClick={show}>Show Dialog</Button>
      <Overlay onDismiss={close} isOpen={isOpen}>
        <Content>
          <DialogTitle>Reach dialog</DialogTitle>
          <DialogDescription>Hello World</DialogDescription>
          <CloseButton onClick={close}>Close</CloseButton>
        </Content>
      </Overlay>
    </Container>
  )
}

export default ReachDialogDemo
