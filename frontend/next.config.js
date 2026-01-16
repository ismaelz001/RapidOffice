/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Konva often prefers strict mode off in dev to avoid double mounts
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]; // Required for Konva in some SSR setups
    return config;
  },
}

module.exports = nextConfig
