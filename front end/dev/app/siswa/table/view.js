define((require, exports, module) => {
    'use strict'

    const Marionette = require('marionette'),
        template = require('text!./template.html'),
        Tbody = require('./tbody'),
        Collection = require('./collection')

    module.exports = Marionette.View.extend({
        tagName: 'table',
        className: 'table table-hover table-sm table-borderless',
        template: _.template(template),
        regions: {
            body: {
                el: 'tbody',
                replaceElement: true
            }
        },
        initialize() {
            this.collection = new Collection()
        },
        onRender() {
            this.showChildView('body', new Tbody({
                collection: this.collection
            }))
            this.collection.fetch()
        }
    })
})
