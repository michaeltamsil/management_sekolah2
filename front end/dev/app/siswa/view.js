define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Table = require('./table/view')


    module.exports = LayoutManager.extend({
        template: _.template(template),
        initialize() {
            this.insertView('#table', new Table())
        }
    })
})
