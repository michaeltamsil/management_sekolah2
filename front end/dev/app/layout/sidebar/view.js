define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager')
    const template = require('text!./template.html')

    module.exports = LayoutManager.extend({
        //tagName: 'div', // default tagName
        className: 'sidebar-sticky',
        template: _.template(template)
    })
})
