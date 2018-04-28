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
                    let previousView = this.layoutView.getView('#content')
                    previousView && previousView.remove()
                    this.layoutView.setView('#content', this.newModule)
                    $('body').prepend(this.layoutView.render().el)
                })
            }else{

            }
        },
        showDashboard(){
            require(['./dashboard/view'], View => {
                this.fnNewModule(View)
            })
        },
        loadSiswa(){
            require(['./siswa/view'], View => {
            })
        }
    })
})
