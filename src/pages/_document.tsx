import Document, { Html, Head, Main, NextScript } from "next/document"

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
          {/* PWA */}
          <link rel="manifest" href="/manifest.json" />
          {/* Favicon */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link rel="apple-touch-icon" href="/apple-icon-180.png" />
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
