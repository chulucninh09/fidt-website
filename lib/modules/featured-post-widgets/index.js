module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Featured Post',
    type: 'singleton',
    addFields: [
        {
            name: '_featuredPost',
            label: 'Post',
            type: 'joinByOne',
            withType: 'blog'
        },
        {
            name: 'backgroundImage',
            label: "Background image",
            type: 'singleton',
            widgetType: 'apostrophe-images'
        },
        {
            name: 'icon',
            label: 'Icon',
            type: 'singleton',
            widgetType: 'apostrophe-images'
        }
    ]
}