import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as runSequence from 'run-sequence';

import Config from './tools/config';
import { loadTasks } from './tools/utils';


loadTasks(Config.SEED_TASKS_DIR);
loadTasks(Config.PROJECT_TASKS_DIR);


gulp.task('build.dev', (done: any) =>
  runSequence('build.sass.dev',
              'build.assets.dev',
              'build.html_css',
              'build.js.dev',
              'build.index.dev',
              done));

gulp.task('build.dev.watch', (done: any) =>
  runSequence('build.dev',
              'watch.dev',
              done));


gulp.task('build.e2e', (done: any) =>
  runSequence('clean.dev',
              'tslint',
              'build.assets.dev',
              'build.js.e2e',
              'build.index.dev',
              done));

gulp.task('build.prod', (done: any) =>
  runSequence('clean.prod',
              'build.sass.prod',
              'build.assets.prod',
              'build.html_css',
              'copy.prod',
              'build.js.prod',
              'build.bundles',
              'build.bundles.app',
              'minify.bundles',
              'build.index.prod',
              done));


gulp.task('build.prod.exp', (done: any) =>
  runSequence('clean.prod',
              'tslint',
              'css-lint',
              'build.assets.prod',
              'build.html_css',
              'copy.prod',
              'compile.ahead.prod',
              'build.js.prod.exp',
              'build.bundles',
              'build.bundles.app.exp',
              'minify.bundles',
              'build.index.prod',
              done));


gulp.task('build.test', (done: any) =>
  runSequence('clean.once',
              'build.assets.dev',
              'build.html_css',
              'build.js.dev',
              'build.js.test',
              'build.index.dev',
              done));


gulp.task('test.watch', (done: any) =>
  runSequence('build.test',
              'watch.test',
              'karma.watch',
              done));


gulp.task('build.tools', (done: any) =>
  runSequence('clean.tools',
              'build.js.tools',
              done));


gulp.task('serve.dev', (done: any) =>
  runSequence('build.dev',
              'server.start',
              'watch.dev',
              done));

gulp.task('serve.e2e', (done: any) =>
  runSequence('build.e2e',
              'server.start',
              'watch.e2e',
              done));



gulp.task('serve.prod', (done: any) =>
  runSequence('build.prod',
              'server.prod',
              done));



gulp.task('test', (done: any) =>
  runSequence('build.test',
              'karma.run',
              done));

// --------------
// Clean dev/coverage that will only run once
// this prevents karma watchers from being broken when directories are deleted
let firstRun = true;
gulp.task('clean.once', (done: any) => {
  if (firstRun) {
    firstRun = false;
    runSequence('clean.dev', 'clean.coverage', done);
  } else {
    util.log('Skipping clean on rebuild');
    done();
  }
});
