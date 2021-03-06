define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        Model = require('./../model'),
        Syphon = require('syphon'),
        fn = require('function')

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
            'click [name="add"]': 'addMataPelajaran',
            'click [name="remove"]': 'removeMataPelajaran',
            'submit form': 'submitForm'
        },afterRender() {
            let self = this
            fn.getDataMata_Pelajaran({
                onSuccess(data){
                    _.each(data, item => {
                        self.$('[name="mata_pelajaran[]"]').append(new Option(item.nama, item.nama))
                    })
                    self.templateMata_Pelajaran =  self.$('[name="mata_pelajaran[]"]').parents('.form-group').clone()
                }
            })
        },
        addMataPelajaran(e) {
            if(this.templateMata_Pelajaran){
                let DOM = this.templateMata_Pelajaran.clone()
                $(e.currentTarget).parents('add-remove').after(DOM)
            }
        },
        removeMataPelajaran(e){
            $(e.currentTarget).parents('add-remove').remove()
        },
        submitForm(e) {
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
