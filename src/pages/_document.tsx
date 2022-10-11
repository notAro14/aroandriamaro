import Document, { Html, Head, Main, NextScript } from "next/document"

import { getCssText } from "src/themes/stitches.config"

const FontPreload = () => {
  return (
    <>
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
          <meta name="theme-color" content="#48214b" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          {/* umami analytics */}
          {process.env.NODE_ENV === "production" ? (
            <script
              async
              defer
              data-website-id="adf5bced-1a27-4505-b0d1-cc6db19a4313"
              src="https://umami-production-dae4.up.railway.app/umami.js"
            ></script>
          ) : null}
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
