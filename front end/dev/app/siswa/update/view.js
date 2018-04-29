define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
    template = require('text!./template.html'),
    Model = require('./../model'),
    Syphon = require('syphon')
    //fn = require('function')

    module.exports = LayoutManager.extend({
        className: 'row',
        template: _.template(template),
        initialize(){
            this.model = new Model()
            this.model.set('id', window.location.hash.split('/').pop())
        },
        events:{
            'submit form': 'submitForm'
        },
        afterRender() {
            this.model.once('sync', (model, data, response) => {
                Syphon.deserialize(this, data)
                this.model.once('sync', () => {
                    let hashSplit = window.location.hash.split('/')
                    hashSplit.pop()
                    window.location.hash = `${hashSplit.join('/')}`
                })
            })

            this.model.fetch()
        },
        submitForm(e){
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
