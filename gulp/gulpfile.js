'use strict'

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename')


gulp.task('welcome', function() {
    gulp.src(['js/hello.js', 'js/index.js','js/jquery.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));
});
gulp.task('minify',function(){
	gulp.src('app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('js'));
	})
gulp.task('default', ['welcome','minify'], function() {
    console.log('this is the default task');
});






















