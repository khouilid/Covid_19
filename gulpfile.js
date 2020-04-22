let gulp = require("gulp");
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let uglifycss = require('gulp-uglifycss');
let watch = require('gulp-watch');
let uglify = require('gulp-uglifyjs');




gulp.task('sass', function () {
    return gulp.src('./sass/Consiel.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./style'));
});
gulp.task('minify-css', () => {
  // Folder with files to minify
  return gulp.src('./style/Consiel.css')
  //The method pipe() allow you to chain multiple tasks together 
  //I execute the task to minify the files
 .pipe(cleanCSS())
 //I define the destination of the minified files with the method dest
 .pipe(gulp.dest('dist'));
});
gulp.task('sasso', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style'));
});
gulp.task('minify-csso', () => {
// Folder with files to minify
return gulp.src('./style/main.css')
//The method pipe() allow you to chain multiple tasks together 
//I execute the task to minify the files
.pipe(cleanCSS())
//I define the destination of the minified files with the method dest
.pipe(gulp.dest('dist'));
});






 
// gulp.task('uglify', function() {
//   gulp.src('js/Script.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'))
// });

gulp.task('watch', function(){
  gulp.watch('./sass/Consiel.scss', gulp.series(['sass'])); 
  // Other watchers
  gulp.watch('./style/Consiel.css', gulp.series(['minify-css']));
  gulp.watch('./sass/main.scss', gulp.series(['sasso'])); 
  // Other watchers
  gulp.watch('./style/main.css', gulp.series(['minify-csso']));
    // Other watchers
  // gulp.watch('js/Script.js', gulp.series(['uglify']));
})


