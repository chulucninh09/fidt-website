module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Testimonials',
  type: 'singleton',
  addFields: [
    {
      name: 'title',
      type: 'singleton',
      widgetType: 'apostrophe-rich-text'
    },
    {
      name: 'tagline',
      type: 'singleton',
      widgetType: 'apostrophe-rich-text'
    },
    {
      name: 'testimonials',
      type: 'array',
      schema: [
        {
          name: '_customerImage',
          type: 'joinByOne',
          withType: 'apostrophe-image',
          label: 'Customer image',
          required: true,
          idField: 'imageId',
          filters: {
            projection: {
              attachment: true
            }
          }
        },
        {
          name: 'customerName',
          type: 'string',
          label: 'Customer name'
        },
        {
          name: 'customerTitle',
          type: 'string',
          label: 'Customer title'
        },
        {
          name: 'customerComments',
          type: 'singleton',
          label: 'Customer comments',
          widgetType: 'apostrophe-rich-text'
        }
      ]
    }
  ]
};