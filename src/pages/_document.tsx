import Document, { Html, Head, Main, NextScript } from "next/document"

import { getCssText } from "lib/stitches.config"

const FontPreload = () => {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/metropolis/metropolis.thin.otf"
        crossOrigin="true"
        as="font"
      />
      <link
        rel="preload"
        href="/fonts/metropolis/metropolis.medium.otf"
        crossOrigin="true"
        as="font"
      />
      <link
        rel="preload"
        href="/fonts/metropolis/metropolis.black.otf"
        crossOrigin="true"
        as="font"
      />
      <link
        rel="preload"
        href="/fonts/metropolis/metropolis.black-italic.otf"
        crossOrigin="true"
        as="font"
      />
      <link
        rel="preload"
        href="/fonts/fira-code.regular.ttf"
        as="font"
        crossOrigin="true"
      />
    </>
  )
}

const FaviconLinks = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
    </>
  )
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <FontPreload />
          <FaviconLinks />
          <meta name="theme-color" content="#ffffff" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
