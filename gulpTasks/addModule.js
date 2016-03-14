/**
 * Created by Phil on 2/16/2016.
 */
var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    buildConfig     = require('../gulp.buildcfg.js')
    ;
require('run-sequence').use(gulp);
var entryModuleName = '';
var PascalEntryModuleName = '';
var declaredModuleName = '';
var moduleType = 'appView';
var modulePath = '/src/app';

gulp.task('createFile', function(){
    return gulp.src('./gulpTasks/gulpTemplates/moduleTpl.js')
        .pipe($.prompt.prompt([{
            type: 'checkbox',
            name: 'modType',
            message: 'What Type of module are we creating?',
            choices: ['appView', 'model', 'directive']
        },{
            type: 'input',
            name: 'nameEntry',
            message: 'Enter a name for the module, in camelCase'
        }], function(res){
            return varSet(res);
        }))

    ;
});

gulp.task('createJsFile', function(){
    return gulp.src(['gulpTasks/gulpTemplates/moduleTpl.js'])
        .pipe($.template({
            name: entryModuleName,
            PascalName: PascalEntryModuleName,
            moduleName: declaredModuleName
        }))
        .pipe($.rename(entryModuleName+'.js'))
        .pipe(gulp.dest('testing/' + modulePath));
});

gulp.task('createHtmlFile', function(){
    return gulp.src(['gulpTasks/gulpTemplates/moduleTpl.html'])
        .pipe($.template({
            name: entryModuleName,
            PascalName: PascalEntryModuleName,
            moduleName: declaredModuleName
        }))
        .pipe($.rename(entryModuleName+'.tpl.html'))
        .pipe(gulp.dest('testing/' + modulePath));
});

function varSet(choice){
    if(choice.modType)
    {
        moduleType = choice.modType.toString();
        entryModuleName = choice.nameEntry;
        switch (choice.modType.toString()){
            case 'appView':
                console.log('APPY mod');
                modulePath = '/src/app/' + entryModuleName;
                break;
            case 'model':
                console.log('making a model');
                modulePath = '/src/common/models/' + entryModuleName;
                break;
            case 'directive':
                console.log('dat ain\' easy');
                modulePath = '/src/common/directives/' + entryModuleName;
                break;
        }
        var stringStart = entryModuleName.slice(0,1).toUpperCase();
        PascalEntryModuleName = stringStart + entryModuleName.slice(1);
        declaredModuleName = buildConfig.app_name+ '.' + entryModuleName;
    }

}