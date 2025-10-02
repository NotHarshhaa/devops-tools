/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgur.com", "github.com"],
  },
};

module.exports = nextConfig;
