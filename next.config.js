const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withPWA = require("next-pwa")({
  dest: "public",
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(
  withPWA(createVanillaExtractPlugin()(config))
)
