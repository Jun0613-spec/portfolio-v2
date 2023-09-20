/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_ACCESS_KEY: process.env.EMAIL_ACCESS_KEY,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = nextConfig;
