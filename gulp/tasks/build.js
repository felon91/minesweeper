module.exports = function () {
  $.gulp.task('build', $.gulp.series('clean', 'copy', 'sass', 'css', 'images', 'webp', 'svg'));
};

