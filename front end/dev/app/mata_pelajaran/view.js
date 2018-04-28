define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager')
    const template = require('text!./template.html')

    module.exports = LayoutManager.extend({
        template: _.template(template)
    })
})
