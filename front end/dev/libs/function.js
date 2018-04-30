define((require, exports, module) => {
    'use strict'
    const $ = require('jquery'),
        config = require('config'),
        ajax = async (name, options) => {
            let result = []
            try {
                result = await $.ajax({
                    url: `${config.urlAPI}${name}`,
                })
                options && options.onSuccess && options.onSuccess(result)

            } catch (error) {
                console.error(error)
            }
        }

    module.exports = {
        getDataHari(options) {
            ajax('hari', options)
        },
        getDataKelas(options) {
            ajax('kelas', options)
        },
        getDataMata_Pelajaran(options) {
            ajax('mata_pelajaran', options)
        }
    }
});
