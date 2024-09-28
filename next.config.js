// next.config.js
const path = require('path');

module.exports = {
  // Set the base path if your repository is not at the root
  // For example, for GitHub Pages user site (username.github.io), it's '/'
  // For project site, it's '/repository-name'
//  basePath: '/swaasth',

  // Enable static export
  output: 'export',

  // If using images, set the domains
  images: {
    unoptimized: true,
    // domains: ['your-image-source.com'],
  },

  // Other Next.js config options
};