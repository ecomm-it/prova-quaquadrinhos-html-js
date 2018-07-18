// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('scss', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest("./public/css/"));
  //gulp.watch('*.scss', ['sass']);
});

// Task in order to put .js files into public folder.
gulp.task('js', () => {
  gulp.src('./js/*.js')
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('livereload', function () {
  gulp.src('./public/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'scss', 'js']);
