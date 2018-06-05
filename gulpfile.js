/*jshint esversion: 6 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('default', function () {
    console.log('Hello Gulp Default Task');
});


gulp.task('sass', function () {
    return gulp.src('sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/build/css'));
  });

gulp.task('js', function () {
    return gulp.src('js/*.js')
        // .pipe(concat('all.js'))
        // .pipe(babel())
        // .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('default',['sass','js']);