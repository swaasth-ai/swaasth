// next.config.js
const path = require('path');

module.exports = {
  // Set the base path if your repository is not at the root
  // For example, for GitHub Pages user site (username.github.io), it's '/'
  // For project site, it's '/repository-name'
  basePath: '',

  // Enable static export
  assetPrefix: './',
  trailingSlash: true,
  output: 'export',

  // If using images, set the domains
  images: {
    loader: 'akamai',
    path: '',
    // domains: ['your-image-source.com'],
  },
  exportTrailingSlash: true,
  async exportPathMap() {
    return {
      '/': { page: '/' },
      // Add more routes if needed
    };
  },

  // Other Next.js config options
};