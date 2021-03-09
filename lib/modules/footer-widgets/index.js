module.exports = {
    extend: 'apostrophe-widgets',
    type: 'singleton',
    label: 'Footer',
    addFields: [
        {
            name: 'address',
            type: 'string',
            label: 'Address'
        },
        {
            name: 'addressLink',
            type: 'url',
            label: 'Link Google Maps'
        },
        {
            name: 'email',
            type: 'string',
            label: 'Email'
        },
        {
            name: 'phone',
            type: 'string',
            label: 'Phone'
        },
        {
            name: 'facebookLink',
            type: 'string',
            label: 'Link Facebook'
        },
        {
            name: 'youtubeLink',
            type: 'string',
            label: 'Link Youtube'
        },
        {
            name: 'linkedinLink',
            type: 'string',
            label: 'Link Linkedin'
        }
    ]
}