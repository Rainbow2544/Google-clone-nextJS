/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ["www.google.com","upload.wikimedia.org","https://freesvg.org/",
  "upload.wikimedia.org"],
  }
}

module.exports = nextConfig
