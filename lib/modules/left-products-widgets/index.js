module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Product advertisement (Left)',
    type: 'area',
    addFields: [
        {
            name: 'category',
            type: 'string',
            label: 'Category',
            // widgetType: 'apostrophe-rich-text',
            def: 'Category'
        },
        {
            name: 'productName1',
            type: 'string',
            label: 'Product name 1',
            // widgetType: 'apostrophe-rich-text'
            def: 'Product name 1'
        },
        {
            name: 'productName2',
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
            name: 'detailsLink',
            type: 'url',
            label: 'Details link'
        }
    ]
}