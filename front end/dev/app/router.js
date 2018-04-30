define((require, exports, module) => {
    'use strict'

    const Backbone = require('backbone'),
        Radio = require('backbone.radio')

    module.exports = Backbone.Router.extend({
        initialize(){
            this.routerModule = {}
            this.channelLayout = Radio.channel('layout')
            this.channelLayout.reply('updateContent', this.fnNewModule, this)
        },
        routes:{
            '':'showDashboard',
            'siswa(/*subrouter)': 'loadRouterSiswa',
            'guru(/*subrouter)': 'loadRouterGuru',
            'kelas(/*subrouter)': 'loadRouterKelas',
            'mata_pelajaran(/*subrouter)': 'showMata_Pelajaran',
            'jadwal_pelajaran(/*subrouter)': 'showJadwal_Pelajaran',
            'raport': 'showRaport',
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
            if(!this.routerModule.siswa){
                require(['./siswa/router'], Router => {
                    this.routerModule.siswa = new Router(`siswa`,{
                        createTrailingSlashRoutes: true
                    })
                })
            }
        },
        loadRouterGuru(){
            if(!this.routerModule.guru){
                require([`./guru/router`], Router => {
                    this.routerModule.guru = new Router('guru',{
                        createTrailingSlashRoutes: true
                    })
                })
            }
        },
        loadRouterKelas(){
            if(!this.routerModule.kelas){
                require([`./kelas/router`], Router => {
                    this.routerModule.kelas = new Router('kelas',{
                        createTrailingSlashRoutes: true
                    })
                })
            }
        },
        showMata_Pelajaran(){
            if(!this.routerModule.mata_pelajaran){
                require([`./mata_pelajaran/router`], Router => {
                    this.routerModule.mata_pelajaran = new Router('mata_pelajaran',{
                        createTrailingSlashRoutes: true
                    })
                })
            }
        },
        showJadwal_Pelajaran(){
            if(!this.routerModule.jadwal_pelajaran){
                require([`./jadwal_pelajaran/router`], Router => {
                    this.routerModule.jadwal_pelajaran = new Router('jadwal_pelajaran',{
                        createTrailingSlashRoutes: true
                    })
                })
            }
        },
        showRaport(){
            require(['./raport/view'], View => {
                this.fnNewModule(View)
            })
        },
        showNot_Found(){
            require(['./not_found/view'], View => {
                this.fnNewModule(View)
            })
        }
    })
})
