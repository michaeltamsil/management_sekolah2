define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html')

    module.exports = LayoutManager.extend({
        tagName: 'table',
        className: 'table table-hover table-sm table-borderless',
        template: _.template(template)
    })
})
