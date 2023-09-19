const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Minify CSS
gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

// Minify JavaScript
gulp.task('minify-js', () => {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js')); 
});

// Default task to run both minify-css and minify-js
gulp.task('default', gulp.parallel('minify-css', 'minify-js'));
