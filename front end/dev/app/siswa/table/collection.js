define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone'),
        Model = require('./../model')

    module.exports = Backbone.Collection.extend({
        url: Model.prototype.urlRoot,
        model: Model
    })
})
