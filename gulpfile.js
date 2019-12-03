const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');

gulp.task("hello", function(done){
    console.log("hello world");
    done();
})


gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('minify', function () {
gulp.src('./*.css')
.pipe(minify({keepBreaks: true}))
.pipe(rename({
suffix: '.min'
}))
.pipe(gulp.dest('./'))
;
});

gulp.task('default', ['minify'], function() {

});