var gulp = require('gulp');
var babel = require('gulp-babel');
var runSeq = require('run-sequence');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var rename = require('gulp-rename');



gulp.task('buildCSS', function () {
    return gulp.src('./client/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./client/public'))
});

gulp.task('reloadCSS', function () {
    return gulp.src('./client/public/style.css').pipe(livereload());
});

// Save for Prod Build
// var uglify = require('gulp-uglify');
// var minifyCSS = require('gulp-minify-css');

gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('buildJS', function () {
    return gulp.src(['./client/js/amplitude.js', './client/js/main.js', './client/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client/public/'));
});

gulp.task('build', function () {
    runSeq(['buildJS', 'buildCSS']);
})


gulp.task('default', function () {
  livereload.listen();
  gulp.start('build');

  gulp.watch('./client/js/**/*.js', function () {
      runSeq('buildJS', ['reload']);
  });

  gulp.watch('client/scss/**', function () {
      runSeq('buildCSS', 'reloadCSS');
  });

    gulp.watch(['client/**/*.html'], ['reload']);

});