const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [600, 900, 1200, 1800],
    domains: ['cdn.shopify.com', 'cdn.sanity.io', 'picsum.photos'],
  },
};
