/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  ...(isProduction && { output: 'export' }),
  basePath: isProduction ? '/portfolio' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig