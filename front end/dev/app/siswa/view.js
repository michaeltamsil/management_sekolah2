define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Table = require('./table/view')


    module.exports = LayoutManager.extend({
        template: _.template(template),
        initialize() {
            this.table = new Table()
            this.on('cleanup', () => {
                this.table.remove()
            })
            //this.insertView('#table', new Table())
        },
        afterRender() {
            this.$('#table').append(this.table.$el)
            this.table.render()
        }
    })
})
