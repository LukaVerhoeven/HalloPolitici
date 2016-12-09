var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('defaulr', function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./www/css/'));
});
