define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone')

    module.exports = Backbone.Router.extend({
        //initialize: function(){   // adalah sama
        routes:{
            '':'showDashboard',
            'siswa': 'loadSiswa',
            'guru': 'loadGuru'
        },
        start(){
            Backbone.history.start()
        },
        fnNewModule(View){
            this.newModule = new View()
            if(!this.layoutView){
                require(['./layout/view'], View => {
                    this.layoutView = new View()
                })
            }else{

            }
        },
        showDashboard(){
            require(['./dashboard/view'], View => {
                fnNewModule(View)
            })
        },
        loadSiswa(){
            require(['./siswa/view'], View => {
            })
        }
    })
})
