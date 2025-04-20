/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this to allow access from Replit domain
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
  // Allow dev origins
  allowedDevOrigins: ['4e414ace-b552-491b-a8dc-16d7e9c7ff59-00-3qqcdftcu8jqk.riker.replit.dev'],
}

module.exports = nextConfig
