var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var debug = require("gulp-debug");
var tasklisting = require("gulp-task-listing");
var autoprefixer = require("gulp-autoprefixer");
var inject = require("gulp-inject");
var nodemon = require("gulp-nodemon");

var del = require("del");
var bs = require("browser-sync");

//local config for gulpfile
var config = require("./gulp.config")(); 

//local variables
var port = process.env.PORT || 7000;

/** help lists all gulp tasks */
gulp.task("help", function(){
   return tasklisting(); 
});

/** watch sass files for changes */
gulp.task("sass:watch", function(){
    log("Starting sass watch");
    gulp.watch(config.sassFiles, ["styles"]);
});

/** convert sass files to css */
gulp.task("styles", ["clean-styles"], function(){
   log("converting sass to css");
   
   return gulp.src(config.sassFiles)
              .pipe(sass().on("error", sass.logError))
              .pipe(autoprefixer({ browsers: [ "> 5%" ]}))
              .pipe(gulp.dest(config.tempPath)); 
});

/** clean styles from temp folder */
gulp.task("clean-styles", function(){
   log("cleaning styles from temp folder");
   clean(config.tempPath + "**/*.css"); 
});

/** wiredep - inject bower js into index.html */
gulp.task("wiredep", function(){
   log("Starting wiredep for bower js and custom js");
   
   var options = config.getWiredepDefaultOptions();
   var wiredep = require("wiredep").stream;
   
   return gulp.src(config.index)
              .pipe(wiredep(options))
              .pipe(debug())
              .pipe(inject(gulp.src(config.js)))
              .pipe(debug())
              .pipe(gulp.dest(config.clientPath));
});

/** inject css into index.html */
gulp.task("inject", ["wiredep"], function () {
   log("injecting css into index.html"); 
   
   return gulp.src(config.index)
              .pipe(inject(gulp.src(config.tempPath + "site.css")))
              .pipe(debug())
              .pipe(gulp.dest(config.clientPath));             
});

/** Start the dev server (./src) */
gulp.task("start-dev", ["inject"], function() {
    serve(true);
});

/** Helper Functions */
function log(message){
    console.log(message);
}

function clean(path){
    log("cleaning files from path " + path);
    del(path);
}

function serve(isDev){    
    var nodeOptions = {
        script: config.node.server,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.serverPath]  
    };
    return nodemon(nodeOptions)
                .on('restart', function(ev) {
                    log('** nodemon restarted **');
                    log('files changed on restart:\n' +ev);
                    setTimeout(function(){
                    bs.notify('reloading noew...');
                    bs.reload({stream: false}); 
                    }, config.node.bsReloadDelay);
                })
                .on('start', function() {
                    log('** nodemon started **');
                    startBrowserSync(isDev);
                })
                .on('crash', function() {
                    log('** nodemon crashed for some reason **');
                })
                .on('exit', function() {
                    log('** nodemon exited cleanly **');
                }); 
       }
 
 function changeEvent(event){
    log("event changed fired " + event);
};

function startBrowserSync(isDev){
    if (bs.active){
        log('Browser sync already active on port ' + port);
        return;
    }
    
    log('Starting Browser-Sync on port ' + port);
    
    if (isDev){
        gulp.watch(config.sassFiles, ['styles'])
            .on('change', function(event) { changeEvent(event) });
    }else{
        gulp.watch(config.sassFiles, ['useref', bs.reload])
            .on('change', function(event) { changeEvent(event) });
    }
    var options = {
        proxy: 'localhost:' + port,
        port: config.bs.defaultPort,
        files: isDev ? [
            config.clientPath + '**/*.*',
            '!' + config.sassFiles,
            config.tempPath + '**/*.css' ] : [],
        ghostMode: {
            click: true,
            location:false,
            scroll:true,
            forms:true
        } ,
        browser: config.bs.defaultBrowser,
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: config.node.bsReloadDelay 
    };
    
    bs(options);
};

