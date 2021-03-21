module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Featured Report',
    type: 'singleton',
    addFields: [
        {
            name: '_featuredPost',
            label: 'Post',
            type: 'joinByOne',
            withType: 'investment-report'
        },
        {
            name: 'backgroundImage',
            label: "Background image",
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1
            }
        },
        {
            name: 'icon',
            label: 'Icon',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1
            }
        }
    ]
}