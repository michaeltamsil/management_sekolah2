const nodeModulesPath = '/node_modules/'
const libsPath = '/libs/'
require.config({
    paths: {
        'backbone': `${nodeModulesPath}backbone/backbone`,
        'layoutmanager': `${nodeModulesPath}backbone.layoutmanager/backbone.layoutmanager`,
        'marionette': `${nodeModulesPath}backbone.marionette/lib/backbone.marionette`,
        'radio': `${nodeModulesPath}backbone.radio/build/backbone.radio`,
        'syphon': `${nodeModulesPath}backbone.syphon/lib/backbone.syphon`,
        'subroute': `${nodeModulesPath}backbone.subroute/dist/backbone.subroute.min`,
        'bootstrap': `${nodeModulesPath}bootstrap/dist/js/bootstrap.bundle`,
        'jquery': `${nodeModulesPath}jquery/dist/jquery.min`,
        'underscore': `${nodeModulesPath}underscore/underscore`,
        'text': `${libsPath}text-2.0.15`,
        'config': `${libsPath}config`
    },
    shim: {
        'backbone': {
            deps: ['underscore']
        },
        'layoutmanager': {
            deps: ['backbone']
        },
        'marionette': {
            deps: ['backbone']
        },
        'radio': {
            deps: ['backbone']
        },
        'syphon': {
            deps: ['backbone']
        },
        'subroute': {
            deps: ['backbone']
        }
    },
    callback() {
        requirejs(['./start'], start => {
            start()
        })
    }
})
