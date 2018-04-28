define((require, exports, module) => {
    'use strict';
    let LayoutManager = require('layoutmanager'),
        template = require('text!./tr.html')

    module.exports = LayoutManager.extend({
        tagName: 'tr',
        template: _.template(template),
        events: {
            'click': 'showUpdate',
            // 'click [name="delete"]': 'showDelete'
        },
        showUpdate(e) {
            window.location.hash += `/${this.model.id}`
        },
    })
})
