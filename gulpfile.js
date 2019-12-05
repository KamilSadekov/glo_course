const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
// const minify = require('gulp-minify-css');
// const rename = require('gulp-rename');
const sass = require('gulp-sass');


 function bs () {
     serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};



// gulp.task('minify', function () {
//     gulp.src('./*.css')
//         .pipe(minify({
//             keepBreaks: true
//         }))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest('./'));
// });

// gulp.task('default', ['minify'], function () {

// });











 function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
}; 


exports.serve = bs;