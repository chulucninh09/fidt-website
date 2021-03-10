module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Homepage banner',
    type: 'singleton',
    addFields: [
        {
            name: 'bannerImage',
            type: "singleton",
            label: "Banner image",
            widgetType: 'apostrophe-images',
            options: {
                limit: 1,
                focalPoint: true,
                noHeight: true,
                size: 'full'
            }
        },
        {
            name: 'slogan',
            type: 'string',
            label: 'Slogan'
        },
        {
            name: 'tagLine',
            type: 'string',
            label: 'Tag line'
        }
    ]
}