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
        initialize(){
            this.model = new Model()
            this.model.set('id', window.location.hash.split('/').pop())
        },
        events:{
            'click [name="add"]': 'addMataPelajaran',
            'click [name="remove"]': 'removeMataPelajaran',
            'submit form': 'submitForm'
        },
        afterRender() {
            let self = this

            const promiseGetDataKelas = new Promise((resolve, reject) => {
                fn.getDataKelas({
                    onSuccess(data){
                        _.each(data, item => {
                            self.$('[name="kelas"]').append(new Option(item.nama, item.nama))
                        })
                        resolve()
                    }
                })
            })

            const promiseGetDataHari = new Promise((resolve, reject) => {
                fn.getDataHari({
                    onSuccess(data){
                        _.each(data, nama => {
                            self.$('[name="hari"]').append(new Option(nama, nama))
                        })
                        resolve()
                    }
                })
            })

            const promiseGetDataMata_Pelajaran = new Promise((resolve, reject) => {
                fn.getDataMata_Pelajaran({
                    onSuccess(data){
                        _.each(data, item => {
                            self.$('[name="mata_pelajaran[]"]').append(new Option(item.nama, item.nama))
                        })
                        self.templateMata_Pelajaran =  self.$('[name="mata_pelajaran[]"]').parents('.form-group').clone()
                        resolve()
                    }
                })
            })

            this.model.once('sync', (model, data, response) => {
                Syphon.deserialize(this, data)
                if (data && data.mata_pelajaran && typeof data.mata_pelajaran == 'object' && data.mata_pelajaran.length){
                    this.$('[name="mata_pelajaran[]"]').val(data.mata_pelajaran[0])
                    for(let i = 0, length = data.mata_pelajaran.length; i < length; i++){
                        if(i){
                            this.$('[name="add"]:visible').click()
                        }
                        this.$('[name="mata_pelajaran[]"]:last').val(data.mata_pelajaran[i])
                    }
                }

                this.model.once('sync', () => {
                    let hashSplit = window.location.hash.split('/')
                    hashSplit.pop()
                    window.location.hash = `${hashSplit.join('/')}`
                })
            })

            Promise.all([
                promiseGetDataKelas,
                promiseGetDataHari,
                promiseGetDataMata_Pelajaran])
            .then(() => {
                this.model.fetch()
            })
        },
        addMataPelajaran(e) {
            if(this.templateMata_Pelajaran){
                let DOM = this.templateMata_Pelajaran.clone()
                $(e.currentTarget).parents('add-remove').after(DOM)
            }
        },
        removeMataPelajaran(e) {
            $(e.currentTarget).parents('add-remove').remove()
        },
        submitForm(e) {
            e.preventDefault()
            this.model.save(Syphon.serialize(this))
        }
    })
})
