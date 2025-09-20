/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'fiverr-res.cloudinary.com',
      'i.postimg.cc',
      'images.unsplash.com',
      'via.placeholder.com'
    ]
  },
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
}

module.exports = nextConfig
