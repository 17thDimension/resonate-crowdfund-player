var gulp = require('gulp');
var replace = require('gulp-replace');
require('./config.js');

var paths = gulp.paths;

function cons(env) {
  var constants = gulp.src(paths.src + '/js/constants.js');
  console.log(config[env].url);
  return constants
    .pipe(replace('/http:\/\/localhost:\d+/g', config[env].url))
    /*.pipe($.ngConfig('starter.config', {
      environment: env, constants: overrideVars
    }))
    .pipe(gulp.dest(paths.src + "/js/constants.js"))*/
}

gulp.task('constants:production', function () {
  return cons('production');
});

gulp.task('constants:development', function () {
  return cons('development');
});
