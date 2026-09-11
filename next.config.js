const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@designcodeio/threeui/style.css'] = path.resolve(__dirname, 'src/shaders/threeui.css');
    config.resolve.alias['@designcodeio/threeui'] = path.resolve(__dirname, 'src/shaders/landing-pages/LandingPages.tsx');

    config.module.rules.push({
      resourceQuery: /raw/,
      type: 'asset/source',
    });

    return config;
  },
};

module.exports = nextConfig;
