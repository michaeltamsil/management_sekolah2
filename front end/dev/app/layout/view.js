define((require, exports, module) => {
    'use strict'

    const LayoutManager = require('layoutmanager'),
        template = require('text!./template.html'),
        NavBar = require('./navbar/view'),
        SideBar = require('./sidebar/view'),
        Content = require('./content/view')

    module.exports = LayoutManager.extend({
        id: 'layout',
        template: _.template(template),
        Views:{
            '#navbar': new Navbar(),
            '#sidebar': new SideBar(),
            '#content': new Content()
        }
    })
})
