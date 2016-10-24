var gulp = require('gulp');

var paths = {
  src: './src',
  vendors: './node_modules',
  dist: './dist'
};

gulp.paths = paths;

require('require-dir')('./gulp');
