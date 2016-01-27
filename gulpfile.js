var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsFiles = ['*.js','src/**/*.js'];
var nodemon = require('gulp-nodemon');

gulp.task('style', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(jscs());
});

gulp.task('serve', ['style'], function() {
    var options = {
        script: 'src/app.js',
        delayTime: 1,
        env :{
            'PORT' : 3000
        },
        watch: jsFiles
    };

    return nodemon(options).on('restart', function() {
        console.log('.....Auto Restart.....');
    });
});