/*jshint esversion: 6 */

var gulp = require('gulp');
var sass = require('gulp-sass');            //sass編譯
var babel = require('gulp-babel');          //轉為es5語法
var uglify = require('gulp-uglify');        //縮小js檔案(es6似乎不支援)
var concat = require('gulp-concat');        //合併檔案


gulp.task('default', function () {
    console.log('Hello Gulp Default Task');
});


gulp.task('sass', function () {
    return gulp.src('sass/*.sass')
      .pipe(sass({                  // 編譯 Scss
        outputStyle: 'compressed'   // 壓縮編譯過後的css需加入此段
    }).on('error', sass.logError))
      .pipe(gulp.dest('public/build/css'));
  });

gulp.task('js', function () {
    return gulp.src('js/*.js')
        // .pipe(concat('all.js'))
        .pipe(babel())
        // .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('watch', function() {
    gulp.watch('sass/*.sass', ['sass']);
    gulp.watch('js/*.js', ['js']);
});

gulp.task('default',['watch','js','sass']);