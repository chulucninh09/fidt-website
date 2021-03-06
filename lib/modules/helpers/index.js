let richTextToolbar = [ 'Styles', 'Bold', 'Italic', 'Blockquote', 'Link', 'Anchor', 'Unlink', 'NumberedList', 'BulletedList', 'Split' ]
let richTextStyles = [
    { name: 'Body Copy (P)', element: 'p', attributes: { class: 'o-body' } },
    { name: 'Section Header (H2)', element: 'h2', attributes: { class: 'o-section-header' } },
    { name: 'Headline (H3)', element: 'h3', attributes: { class: 'o-headline' } },
    { name: 'Sub Headline (H4)', element: 'h4', attributes: { class: 'o-subheadline' } },
    { name: 'Meta (P)', element: 'p', attributes: { class: 'o-meta' } }
  ]

module.exports = {
  extend: 'apostrophe-module',
  alias: 'helpers',
  label: 'Helpers',
  construct: function (self, options) {
    // Have to wait for all modules to be initialized so we can reach into `locations` options
    self.modulesReady = () => {
    };

    self.addHelpers({
        widgets: {
            // Standard widgets
            'apostrophe-rich-text': {
                toolbar: richTextToolbar,
                styles: richTextStyles
            },
            'apostrophe-images': {},
            // Custom widgets
            'two-column': {},
            'image': {}
        }
    });
  }
};
