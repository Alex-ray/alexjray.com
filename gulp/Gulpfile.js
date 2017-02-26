import path from 'path';
import gulp from 'gulp';
import gulpS3Upload from 'gulp-s3-upload';

// ENV
import {getDotenv} from '../universal/utils/dotenv';

// Import .env and expand variables: Sets process.env[VARS] as a side-effect.
getDotenv();


/**
 * Maybe we should use IAM default settings?
 *  ...or to use IAM settings...
 * var config = { useIAM: true };
**/
const s3Config = {
  accessKeyId: process.env['AWS_ACCESSS_KEY_ID'],
  secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY']
};

const s3 = gulpS3Upload(s3Config);

const root  = process.cwd();
const build = path.join(root, 'build');

const bucket = process.env['AWS_S3_BUCKET']

gulp.task('upload', function () {
  gulp.src(build)
      .pipe(s3({
        Bucket: bucket,
        ACL: 'public-read'
      }));
});
