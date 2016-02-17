/**
 * Created by Phil on 2/16/2016.
 */
var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    buildConfig     = require('../gulp.buildcfg.js')
    ;
require('run-sequence').use(gulp);

gulp.task('moduleParse', function(){
    var jsArray = gulp.src([
        '../src/**/*.js',
        '!../src/assets/**/*.js',
        '!../src/**/*.spec.js'
    ], {read: false, base: './'});

    console.log(jsArray);


});