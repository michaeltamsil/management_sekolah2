const nodeModulesPath = '/node_modules/'
const libsPath = '/libs/'
require.config({
    paths: {
        'backbone': `${nodeModulesPath}backbone/backbone`,
        'backbone.layoutmanager': `${nodeModulesPath}backbone.layoutmanager/backbone.layoutmanager`,
        'backbone.marionette': `${nodeModulesPath}backbone.marionette/lib/backbone.marionette`,
        'backbone.radio': `${nodeModulesPath}backbone.radio/build/backbone.radio`,
        'backbone.syphon': `${nodeModulesPath}backbone.syphon/lib/backbone.syphon`,
        'bootstrap': `${nodeModulesPath}bootstrap/dist/js/bootstrap.bundle`,
        'jquery': `${nodeModulesPath}jquery/dist/jquery.min`,
        'underscore': `${nodeModulesPath}underscore/underscore`,
        'text': `${libsPath}text-2.0.15`
    },
    shim: {
        'backbone': {
            deps: ['underscore']
        },
        'backbone.layoutmanager': {
            deps: ['backbone']
        },
        'backbone.marionette': {
            deps: ['backbone']
        },
        'backbone.radio': {
            deps: ['backbone']
        },
        'backbone.syphon': {
            deps: ['backbone']
        }
    },
    callback() {
        requirejs(['./start'], start => {
            start()
        })
    }
})
