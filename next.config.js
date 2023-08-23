/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["messengeserviceblob.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
