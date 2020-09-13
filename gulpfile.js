const gulp = require('gulp'),
    headerfooter = require('gulp-headerfooter'),
    watch = require('gulp-watch');

gulp.task('build-html', function () {
    return gulp.src(['./src/*.html', '!./src/_header.html', '!./src/_footer.html'])
      .pipe(headerfooter.header('./src/_header.html'))
      .pipe(headerfooter.footer('./src/_footer.html'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('build-files', function() {
    return gulp.src(['./src/css/**/*','./src/fonts/**/*', './src/img/**/*', './src/js/**/*'],  {base: './src/'})
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/*.html', gulp.series('build-html'));
    gulp.watch(['./src/css/**/*','./src/fonts/**/*', './src/img/**/*', './src/js/**/*'], gulp.series('build-files'))
});