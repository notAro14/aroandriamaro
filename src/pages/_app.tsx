import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import NextLink from "next/link"
import { AppProps } from "next/app"

import "@radix-ui/themes/styles.css"

import {
  Container,
  Heading,
  Text,
  Link,
  Flex,
  Separator,
  Theme,
} from "@radix-ui/themes"
import { Github, Linkedin } from "lucide-react"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Theme accentColor={"amber"} panelBackground="translucent">
          <Container size={"2"} p={"1"}>
            <Flex direction={"column"} gap={"4"} asChild mb={"8"}>
              <header>
                <Flex direction={"column"} gap={"1"}>
                  <Heading size={"8"}>
                    <Link asChild>
                      <NextLink href={"/"}>Aro Andriamaro</NextLink>
                    </Link>
                  </Heading>
                  <Text>Web Developer</Text>
                </Flex>
                <Separator size={"2"} />
                <Flex align={"center"} gap={"2"}>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={"https://github.com/notAro14"}
                  >
                    <Github size={"1em"} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/notaro14/"
                  >
                    <Linkedin size={"1em"} />
                  </Link>
                </Flex>
              </header>
            </Flex>

            <main>
              <Component {...pageProps} />
            </main>
            <Flex
              py={"6"}
              mt={"8"}
              direction={"column"}
              justify={"center"}
              align={"center"}
            >
              <Text>
                Made by{" "}
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={"https://github.com/notAro14/aroandriamaro"}
                >
                  notAro14
                </Link>{" "}
                &copy;
                {new Date().getFullYear()}
              </Text>
            </Flex>
          </Container>
        </Theme>
      </ThemeProvider>
      <Analytics />
    </>
  )
}
