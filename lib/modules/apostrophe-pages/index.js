// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
    {
      name: 'page-builder',
      label: 'Page builder'
    },
    {
      name: 'blogs-page',
      label: 'Blog page'
    },
    {
      name: 'investment-reports-page',
      label: 'Investment report page'
    },
    {
      name: 'youtube-videos-page',
      label: 'Youtube video page'
    }
  ]
};
