var path = require('path');

// Import settings from settings folder
const settings = require('./settings')

var apos = require('apostrophe')({
  shortName: 'fidt-website',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    settings,
    // Add an alt field to images schema, by default the title is used but
    // we recommend enabling the alt field for clarity.
    'apostrophe-images': {
      enableAltField: true
    },
    
    // Helper module
    'helpers': {extend: 'apostrophe-module'},

    // Homepage widgets
    'homepage-banner-widgets': {},
    'homepage-show-off-bar-widgets': {},
    'left-products-widgets': {},
    'right-products-widgets': {},
    'about-us-banner-widgets': {},
    'footer-widgets': {},
    
    // Page builder widgets
    'two-column-widgets': {},
    'image-widgets': {},

    // Blog posts
    'blogs': {},
    'blogs-pages': {},
    'featured-post-widgets': {}
  }
});
