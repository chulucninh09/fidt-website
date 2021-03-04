module.exports = {
    extend: 'apostrophe-widgets',
    label: '2 Columns',
    type: 'area',
    addFields: [
        {
            name: 'firstColWidth',
            type: 'string',
            label: 'First column width'
        },
        {
            name: 'secondColWidth',
            type: 'string',
            label: 'Second column width'
        },
        {
            name: 'col1',
            type: 'area',
            label: 'Col 1',
            contextual: true
        },
        {
            name: 'col2',
            type: 'area',
            label: 'Col 2',
            contextual: true
        }
    ],
    skipInitialModal: true,
    construct(self, options) {
        var superPushAssets = self.pushAssets;
        self.pushAssets = function() {
          superPushAssets();
          self.pushAsset('stylesheet', 'two-column-widgets', { when: 'always' });
        };    
    }
}