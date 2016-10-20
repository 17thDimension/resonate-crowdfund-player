var gulp = require('gulp');
var runSeq = require('run-sequence');
var livereload = require('gulp-livereload');
var shell = require('gulp-shell')

var paths = gulp.paths;

gulp.task('reloadCSS', function () {
    return gulp.src(paths.public + '/style.css').pipe(livereload());
});

gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.start('build');

  gulp.watch(paths.src + '/js/**/*.js', function () {
      runSeq('buildJS', ['reload']);
  });

  gulp.watch(paths.src + '/scss/**', function () {
      runSeq('buildCSS', 'reloadCSS');
  });

  gulp.watch([paths.src + '/**/*.html'], ['reload']);
});

//gulp.task('serve', ['constants:local'], shell.task('ws'));
gulp.task('serve', shell.task('ws'));

gulp.task('dev', ['serve', 'watch']);
