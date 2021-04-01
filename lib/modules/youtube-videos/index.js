module.exports = {
    extend: 'apostrophe-pieces',
    name: 'youtube-video',
    label: 'Youtube video',
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
            name: 'youtubeLink',
            label: 'Youtube link',
            type: 'url'
        }
    ]
}