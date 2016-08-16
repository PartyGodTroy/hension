var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');


gulp.task('less-styles', function() {
    gulp.src(['./less'])
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('./css'))
});