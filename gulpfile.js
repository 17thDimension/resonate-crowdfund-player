var gulp = require('gulp');
var babel = require('gulp-babel');
var runSeq = require('run-sequence');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');

// Save for Sass and css build
// var sass = require('gulp-sass');
// var minifyCSS = require('gulp-minify-css');
// gulp.task('buildCSS', function () {
//     return gulp.src('./browser/scss/main.scss')
//         .pipe(plumber())
//         .pipe(sass())
//         .pipe(rename('style.css'))
//         .pipe(gulp.dest('./public'))
// });

// Save for Prod Build
// var uglify = require('gulp-uglify');
// var runSeq = require('run-sequence');

gulp.task('reload', function () {
    livereload.reload();
});

// gulp.task('lintJS', function () {
//     return gulp.src(['./client/js/**/*.js'])
//         .pipe(jshint())
//         .pipe(jshint.reporter('jshint-stylish'));
// });

gulp.task('buildJS', function () {
    return gulp.src(['./client/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client/public/'));
});

gulp.task('build', function () {
    runSeq(['buildJS']); //, 'buildCSS']);
})


gulp.task('default', function () {
  livereload.listen();
  gulp.start('build');

  gulp.watch('./client/js/**/*.js', function () {
      runSeq('buildJS', ['reload']);
  });



    // gulp.watch('browser/scss/**', function () {
    //     runSeq('buildCSS', 'reloadCSS');
    // });

    gulp.watch(['client/**/*.html'], ['reload']);

});