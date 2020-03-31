const gulp = require("gulp");
const sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
const uglifycss = require('gulp-uglifycss');
// const watch = require('gulp-watch');


gulp.task('sass', function () {
    return gulp.src('./sass/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./style'));
});
gulp.task('minify-css', () => {
  // Folder with files to minify
  return gulp.src('./style/*.css')
  //The method pipe() allow you to chain multiple tasks together 
  //I execute the task to minify the files
 .pipe(cleanCSS())
 //I define the destination of the minified files with the method dest
 .pipe(gulp.dest('dist'));
});

// We create a 'default' task that will run when we run `gulp` in the project
gulp.task('default', function() {
// We use `gulp.watch` for Gulp to expect changes in the files to run again
  gulp.watch('./sass/main.scss', function(evt) {
  gulp.task('sass');
  });
  gulp.watch('./style/*.css', function(evt) {
    gulp.task('minify-css');
    });
});

