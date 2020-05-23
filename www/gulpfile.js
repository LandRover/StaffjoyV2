const { src, dest, watch, series, parallel } = require('gulp');
const gulpSass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function sassTask() {
  // Where should gulp look for the sass files?
  // My .sass files are stored in the styles folder
  // (If you want to use scss files, simply look for *.scss files instead)
  return (
      src('./sass/**/*.scss')
      .pipe(gulpSass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest('./assets/css/'))
  );
}

function watchTask() {
  watch(
      ['./sass/**/*.scss'],
      parallel(sassTask)
  );
}

exports.sass = sassTask;
exports.watch = watchTask;

exports.default = series(
  sassTask,
  watchTask
);
