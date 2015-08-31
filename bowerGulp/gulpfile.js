var gulp = require('gulp');
var browserSync = require('browser-sync')
gulp.task('runner', function() {
    console.log('word from gulp!')
});
gulp.task('makeIndex', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({
            stream: true
        }))

});

gulp.task('watchChanges',function(){
	gulp.watch('src/index.html',['makeIndex'])
	})
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './build'
        }

    })
})
gulp.task('default', ['runner', 'makeIndex','browserSync','watchChanges']);