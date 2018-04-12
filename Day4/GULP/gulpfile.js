var gulp=require('gulp');
var sass=require('gulp-sass');
var less=require('gulp-less');
var watch=require('gulp-watch');
var gulputil=require('gulp-util');
var browserify=require('browserify');
var fs = require('fs');


gulp.task('default', () => {
    browserify({
      entries: 'src/utils.js',
      debug: true
    })
    .bundle()
    .pipe(fs.createWriteStream('./dist/JS/utils.js'));
});

