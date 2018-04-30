define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone'),
        config = require('config')

    module.exports = Backbone.Model.extend({
        urlRoot: `${config.urlAPI}kelas`,
        initialize(){
            this.on('error', (model, response) => {
                alert(response.statusText)
            })
        }
    })
})
