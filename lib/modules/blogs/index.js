module.exports = {
    extend: 'apostrophe-pieces',
    name: 'blog',
    label: 'Blog post',
    addFields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string'
        },
        {
            name: 'coverImage',
            label: 'Cover image',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1
            }
        },
        {
            name: 'preview',
            label: 'Preview text',
            type: 'singleton',
            widgetType: 'apostrophe-rich-text'
        },
        {
            name: 'issueDate',
            label: 'Issue date',
            type: 'date',
            pikadayOptions: {
                format: 'DD/MM/YYYY',
                firstDay: 1
            }
        },
        {
            name: 'freeToPublicDate',
            label: 'Free to Public date',
            type: 'date',
            pikadayOptions: {
                format: "DD/MM/YYYY",
                firstDay: 1
            }
        },
        {
            name: 'content',
            label: 'Content',
            type: 'area'
        }
    ]
}