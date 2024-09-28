const path = require('path');

module.exports = {
  // Set the base path if your repository is not at the root
  basePath: '',

  // Enable static export
  assetPrefix: './',
  trailingSlash: true,
  output: 'export',

  // Use default Next.js image configuration
  images: {
    unoptimized: true,
    path: '/', // Path where the images will be served from (root of public folder)
  },

  // Webpack configuration if you need to resolve image paths manually
  webpack: (config) => {
    config.resolve.alias['images'] = path.join(__dirname, 'public/images');
    return config;
},
};