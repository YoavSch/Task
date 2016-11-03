import * as gulp from 'gulp';
import * as sass from 'gulp-sass';
import { join } from 'path';
import Config from '../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src(join(Config.APP_SRC, '**', '*.scss'))
    .pipe(sass())
    .pipe(gulp.dest(Config.APP_SRC));
};
