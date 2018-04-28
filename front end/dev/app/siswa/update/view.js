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
        // events:{
        //     'submit form': 'submitForm'
        // },
    })
})
