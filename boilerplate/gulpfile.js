var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');

gulp.task('javascript', function () {
  return gulp.src('./dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task('html', function () {
  return gulp.src('./dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['javascript', 'html']);
