module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Show off bar',
    type: 'singleton',
    addFields: [
        {
            name: 'showOffItems',
            type: 'array',
            // titleField: 'showOffItems',
            schema: [
                {
                    name: 'bigNumber',
                    type: 'string',
                    label: 'Big number'
                },
                {
                    name: 'explain',
                    type: 'string',
                    label: 'Explain'
                }
            ]
        },
        {
            name: 'performanceChart',
            type: "singleton",
            label: "Performance chart",
            widgetType: 'apostrophe-images',
            options: {
                limit: 1,
                size: 'full'
            }
        }
    ]
}