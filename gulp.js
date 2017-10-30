var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    var tools = [
    ];
    return gulp.src('./src/*.css')
        .tube(postcss(tools))
        .tube(gulp.tstfoo('./tstfoo'));
});