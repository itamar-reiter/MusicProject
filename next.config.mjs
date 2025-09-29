/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If you're using image optimization, you may need:
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

export default nextConfig;
