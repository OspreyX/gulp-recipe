var gulp = require('gulp'),
    openfinConfigBuilder = require('openfin-config-builder'),
    openfinLauncher = require('openfin-launcher'),
    path = require('path');
 
function createConfig() {
    return openfinConfigBuilder.create({
            startup_app: {
                name: 'myApp',
                url: 'http://openfin.co'
            }
        }, 'app.json');
}
 
function updateConfig() {
    return openfinConfigBuilder.update({
            startup_app: {
                name: 'staging_app'
            }
        }, 'app.json');
}

function launchOpenfin () {
    return openfinLauncher.launchOpenFin({
            configPath: 'file:/' + path.resolve('app.json')
        });
}
 
gulp.task('openfin', function() {
    return createConfig()
        .then(updateConfig)
        .then(launchOpenfin);
});
 
gulp.task('default', ['openfin']);