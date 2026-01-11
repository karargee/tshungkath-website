/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/training-sessions',
        destination: '/training-sessions.html'
      },
      {
        source: '/client-progress',
        destination: '/client-progress.html'
      },
      {
        source: '/analytics',
        destination: '/analytics.html'
      }
    ]
  }
}

module.exports = nextConfig