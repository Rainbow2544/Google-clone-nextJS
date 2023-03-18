/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ["www.google.com","upload.wikimedia.org","https://freesvg.org/",
  "upload.wikimedia.org","timgm.eprice.com.tw"],
  }
}

module.exports = nextConfig
