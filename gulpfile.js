// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
const flexSvg = require('gulp-flex-svg');


gulp.task('svg', () => {
  
  gulp.src('public/fonts/*.svg')
    .pipe(flexSvg())
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('scss', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest("./public/css/"));
    //gulp.watch('*.scss', ['sass']);

    //compressing all CSS's
        gulp.src('public/css/*css')
          .pipe(sass({outputStyle:'compressed'})).on('error', sass.logError)
          .pipe(gulp.dest("public/css"));

        gulp.src('public/js/jquery-modal/*css')
          .pipe(sass({outputStyle:'compressed'})).on('error', sass.logError)
          .pipe(gulp.dest('public/js/jquery-modal/')); 
});

gulp.task('connect', function(){
    connect.server({
      root: 'public',
      livereload: true
    });
  });

  gulp.task('livereload', function (){
    gulp.src('./public/**/**/*')
    .pipe(connect.reload());
  });

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['scss']);
    gulp.watch('./public/**/**/*', ['livereload']);
  });


  gulp.task('default', ['connect', 'watch', 'scss', 'svg']);
