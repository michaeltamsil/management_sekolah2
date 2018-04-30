define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone'),
        config = require('config')

    module.exports = Backbone.Model.extend({
        urlRoot: `${config.urlAPI}guru`
    })
})
