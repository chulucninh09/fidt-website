module.exports = {
    extend: 'apostrophe-widgets',
    label: 'About us banner',
    type: 'singleton',
    addFields: [
        {
            name: 'description',
            type: 'singleton',
            label: 'Content',
            widgetType: 'apostrophe-rich-text'
        },
        {
            name: 'backgroundImage',
            type: 'singleton',
            label: 'Background image',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1
            }
        }
    ]
}