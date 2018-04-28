define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager')
    const template = require('text!./template.html')

    module.exports = LayoutManager.extend({
        tagName: 'a',
        className: 'navbar-brand',
        attributes: {
            'href': '#'
        },
        template: _.template(template)
    })
})
