import * as gulp from 'gulp';
import * as gulpCli from 'gulp-cli';
import * as runSequence from 'gulp4-run-sequence';

function toDest0(): object {
  return gulp.src('src/**').pipe(gulp.dest('dest0'));
}

function toDest1(): object {
  return gulp.src('src/**').pipe(gulp.dest('dest1'));
}

gulp.task('task0', toDest0);
gulp.task('task1', toDest1);
gulp.task('default', (cb) => {
  runSequence('task0', 'task1', cb);
});

gulpCli();
