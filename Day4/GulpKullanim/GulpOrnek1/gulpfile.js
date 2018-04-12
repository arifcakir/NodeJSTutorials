var gulp=require("gulp");
var sass=require("gulp-sass");
var watch = require('gulp-watch');
var gulpUtil = require('gulp-util');


gulp.task('merhaba',function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(livereload())
});

gulp.task('izle',function() {
    livereload.listen();
    gulp.watch('scss/**/*.scss', ['merhaba']);
});


var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');
 
gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('less/*.less', ['less']);
});


gulp.task('olustur',function(){
    return gulp.src('*.*', {read: false})
    .pipe(gulp.dest('./'+gulpUtil.env.ad))
});