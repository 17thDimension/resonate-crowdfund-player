var gulp = require('gulp');

var paths = gulp.paths;

function cons(env) {
  var config = gulp.src('config.json');

  return config
    /*.pipe($.ngConfig('starter.config', {
      environment: env, constants: overrideVars
    }))*/
    .pipe(gulp.dest(paths.src + "/js/config"))
}

gulp.task('constants:production', function () {
  return cons('production');
});

gulp.task('constants:staging', function () {
  return cons('staging');
});
