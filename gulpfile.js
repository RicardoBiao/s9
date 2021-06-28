var gulp = require('gulp');
var del = require('del');
// var Fontmin = require('gulp-fontmin');


// 复制css到css文件夹
gulp.task('copyCss', function () {
  return gulp.src('./build/*.css')
    .pipe(gulp.dest('./css'))
});

// 复制js到js文件夹
gulp.task('copyJs', function () {
  return gulp.src('./build/*.js')
    .pipe(gulp.dest('./script'))
});


// 删除任务
gulp.task('delFile', async () => {
  await del(['./css/app.*.css']);
  await del(['./script/app.*.js']);
})

// 生成字体
gulp.task('copyFonts', function () {
  return gulp.src('./build/fonts/*')
    .pipe(gulp.dest('./css'));
})

// 注册默认任务
gulp.task('default', gulp.series(gulp.parallel('delFile','copyFonts'), gulp.parallel('copyCss', 'copyJs')));