/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 * Original from: https://github.com/angular/quickstart/blob/master/src/systemjs.config.js
 */
(function (global) {

    // custom loader to cache bust
    // see: https://github.com/systemjs/systemjs/issues/1616
    System.registry.set("my-cache-buster-loader",
    System.newModule({
        locate: function(load){
            var buildText = Date.now().toString(36);
            return load.address + "?build=" + buildText;
        }
    }));


    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            app: 'dist', // app is within dist folder when it gets compiled
            'angular':        'npm:angular/angular.js',
            'angular-route':  'npm:angular-route/angular-route.js',
            "jquery": "npm:jquery/dist/jquery.min.js",
            "jquery-ui": "npm:jquery-ui-dist/jquery-ui.min.js",
            "bootstrap":"npm:bootstrap/dist/js/bootstrap.min.js"
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main'
              }
        }, meta: {
            "angular":{
                "format": "global",
                "exports": "angular"
            },
            "jquery":{
                "format":"global",
                "exports":"jQuery"
            },
            "dist/*":{
                loader: "my-cache-buster-loader"
            }
        }
    });
})(this);