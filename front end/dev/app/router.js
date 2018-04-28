define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone')

    module.exports = Backbone.Router.extend({
        //initialize: function(){   // adalah sama
        routes:{
            '':'showDashboard',
            'siswa': 'showSiswa',
            'guru': 'showGuru',
            'kelas': 'showKelas',
            'mata_pelajaran': 'showMata_Pelajaran',
            'jadwal_pelajaran': 'showJadwal_Pelajaran',
            'raport': 'showRaport'
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
                let previousView = this.layoutView.getView('#content')
                previousView && previousView.remove()
                this.layoutView.setView('#content', this.newModule)
                this.newModule.render()
            }
        },
        showDashboard(){
            require(['./dashboard/view'], View => {
                this.fnNewModule(View)
            })
        },
        showSiswa(){
            require(['./siswa/view'], View => {
                this.fnNewModule(View)
            })
        },
        showGuru(){
            require(['./guru/view'], View => {
                this.fnNewModule(View)
            })
        },
        showKelas(){
            require(['./kelas/view'], View => {
                this.fnNewModule(View)
            })
        },
        showMata_Pelajaran(){
            require(['./mata_pelajaran/view'], View => {
                this.fnNewModule(View)
            })
        },
        showJadwal_Pelajaran(){
            require(['./jadwal_pelajaran/view'], View => {
                this.fnNewModule(View)
            })
        },
        showRaport(){
            require(['./raport/view'], View => {
                this.fnNewModule(View)
            })
        }
    })
})
