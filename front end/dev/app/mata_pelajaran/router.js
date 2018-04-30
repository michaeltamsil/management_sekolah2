define((require, exports, module) => {
    'use strict'

    const SubRoute = require('subroute'),
        Radio = require('backbone.radio')

    module.exports = SubRoute.extend({
        initialize(){
            this.channelLayout = Radio.channel('layout')
        },
        routes:{
            '': 'showList',
            'create': 'showCreate',
            '(:id)': 'showUpdate'
        },
        showList(){
            require(['./view'], View => {
                this.channelLayout.request('updateContent', View)
            })
        },
        showCreate() {
            require(['./create/view'], View => {
                this.channelLayout.request('updateContent', View)
            })
        },
        showUpdate() {
            require(['./update/view'], View => {
                this.channelLayout.request('updateContent', View)
            })
        }
    })
})
