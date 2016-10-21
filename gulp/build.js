var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var runSeq = require('run-sequence');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

var paths = gulp.paths;

gulp.task('buildCSS', function () {
    return gulp.src(paths.src + '/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest(paths.public))
});

gulp.task('buildJS', function () {
    return gulp.src([
      paths.src + '/js/amplitude.js',
      paths.src + '/js/main.js',
      paths.src + '/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.public));
});

gulp.task('build', function () {
    runSeq(['buildJS', 'buildCSS']);
})
