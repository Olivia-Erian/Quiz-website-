var gulp= require ('gulp')
var sass= require ('gulp-sass')
gulp.task('scss',function(){
    return gulp.src('SASS/Style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('default', function () {
    gulp.watch('./SASS/*.scss', gulp.series('scss'));
  });