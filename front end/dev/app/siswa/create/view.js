define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Model = require('./../model'),
        Syphon = require('syphon'),
        fn= require('function')

    module.exports = LayoutManager.extend({
        className: 'row',
        template: _.template(template),
        initialize() {
            this.model = new Model()
            this.listenTo(this.model, 'sync', () => {
                this.$('[name="close"]')[0].click()
            })
        },
        events: {
            'submit form': 'submitForm'
        },
        afterRender(){
            fn.getDataKelas({
                onSuccess(data){
                    _.each(data, item => {
                        self.$('[name="kelas"]').append(new Option(item.nama, item.nama))
                    })
                }
            })
        },
        submitForm(e) {
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
