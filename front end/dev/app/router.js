define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone'),
        Radio = require('backbone.radio')

    module.exports = Backbone.Router.extend({
        initialize: function(){
            this.subRoute = {}
            this.channelLayout = Radio.channel('layout')
            this.channelLayout.reply('updateContent', this.fnNewModule, this)
        },
        routes:{
            '':'showDashboard',
            'siswa(/*subroute)': 'loadRouterSiswa',
            'guru(/*subroute)': 'loadRouterGuru',
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
        loadRouterSiswa(){
            if(!this.subRoute.siswa){
                require(['./siswa/router'], Router => {
                    this.subRoute.siswa = new Router(`siswa`, {
                        createTrailingSlashRoutes: true
                    })
                })
            }
        },
        loadRouterGuru(){
            if(!this.subRoute.siswa){
                require(['./guru/router'], Router => {
                    this.subRoute.siswa = new Router(`guru`, {
                        createTrailingSlashRoutes: true
                    })
                })
            }
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
