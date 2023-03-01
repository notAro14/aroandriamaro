import Document, { Html, Head, Main, NextScript } from "next/document"

import { getCssText } from "src/themes/stitches.config"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Theme color */}
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#52a9ff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#006adc"
          />
          {/* Fonts */}
          <link
            rel="preload"
            href="/fonts/metropolis/metropolis.extra-light.otf"
            crossOrigin="true"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/luckiest-guy/luckiest-guy.regular.ttf"
            crossOrigin="true"
            as="font"
          />
          {/* PWA */}
          <link rel="manifest" href="/manifest.json" />
          {/* Favicon */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          {/* Stitches */}
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
