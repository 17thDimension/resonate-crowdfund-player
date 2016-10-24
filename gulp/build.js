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
var cleanCSS = require('gulp-clean-css');

var paths = gulp.paths;

var cssSrc = [
  paths.src + '/scss/main.scss'
];

var jsSrc = [
  paths.vendors + '/whatwg-fetch/fetch.js',
  paths.src + '/js/amplitude.js',
  paths.src + '/js/main.js',
  paths.src + '/js/**/*.js'
]

gulp.task('buildCSS', function () {
  return gulp.src(cssSrc)
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(gulp.dest(paths.src))
});

gulp.task('buildJS', function () {
  return gulp.src(jsSrc)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.src));
});

gulp.task('buildCSS:production', function () {
  return gulp.src(cssSrc)
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('buildJS:production', function () {
  return gulp.src(jsSrc)
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copyIndex', function () {
  return gulp.src(paths.src + '/index.html')
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copyVendorCSS', function () {
  return gulp.src(paths.vendors + '/mdi/css/materialdesignicons.min.css')
    .pipe(gulp.dest(paths.dist));
});

gulp.task('fonts', function() {
  return gulp.src([
    paths.src + '/fonts/AvertaDemo-Regular.otf',
    paths.src + '/fonts/materialdesignicons-webfont.*'])
      .pipe(gulp.dest(paths.dist + '/fonts/'));
});

// TODO: add tasks to set constants (server url)
gulp.task('build', function () {
  runSeq(['buildJS', 'buildCSS']);
})

// TODO: add task to clean dist directory
gulp.task('build:production', function () {
    runSeq([
      'copyIndex',
      'fonts',
      'buildJS:production',
      'buildCSS:production',
      'copyVendorCSS']);
})
