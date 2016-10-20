var gulp = require('gulp');

var paths = {
  src: './client',
  public: './client/public'
};

gulp.paths = paths;

require('require-dir')('./gulp');
