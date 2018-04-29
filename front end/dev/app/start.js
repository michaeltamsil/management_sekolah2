define((require, exports, module) => {
    'use strict'
    const Router = require('router')

    //module.exports = function(){
    module.exports = () => {

        let router = new Router()
        router.start()
    }
})
