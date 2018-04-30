define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Model = require('./../model'),
        Syphon = require('syphon')

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
                    this.$('[name="close"]')[0].click()
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
