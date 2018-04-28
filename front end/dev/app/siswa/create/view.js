define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Model = require('./../model'),
        Syphon = require('syphon')

    module.exports = LayoutManager.extend({
        className: 'row',
        template: _.template(template),
        initialize() {
            this.model = new Model()
            this.listenTo(this.model, 'sync', () => {
                let hashSplit = window.location.hash.split('/')
                hashSplit.pop()
                window.location.hash = `${hashSplit.join('/')}`
            })
        },
        events: {
            'submit form': 'submitForm'
        },
        submitForm(e) {
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
