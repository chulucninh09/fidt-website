module.exports = {
    label: 'Single image',
    extend: 'apostrophe-widgets',
    addFields: [
        {
            name: 'image',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1
            }
        }
    ]
}