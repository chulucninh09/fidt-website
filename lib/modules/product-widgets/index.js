module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Product advertisement',
    type: 'area',
    addFields: [
        {
            name: 'topic',
            type: 'string',
            label: 'Topic',
            // widgetType: 'apostrophe-rich-text',
            def: 'Topic'
        },
        {
            name: 'name1',
            type: 'string',
            label: 'Product name 1',
            // widgetType: 'apostrophe-rich-text'
            def: 'Product name 1'
        },
        {
            name: 'name2',
            type: 'string',
            label: 'Product name 2',
            // widgetType: 'apostrophe-rich-text'
            def: 'Product name 2'
        },
        {
            name: 'description',
            type: 'singleton',
            label: 'Product description',
            widgetType: 'apostrophe-rich-text'
        },
        {
            name: 'image',
            type: 'singleton',
            label: 'Product image',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1
            }
        },
        {
            name: 'registerLink',
            type: 'url',
            label: 'Register link'
        },
        {
            name: 'detailsLink',
            type: 'url',
            label: 'Details link'
        }
    ]
}