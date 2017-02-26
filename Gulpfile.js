import path from 'path';
import gulp from 'gulp';
import awspublish from 'gulp-awspublish';
import dotenv from 'dotenv';

dotenv.config();

const root  = process.cwd();
const build = path.join(root, 'build');

gulp.task('upload', function () {

  const s3Config = {
    accessKeyId: process.env['AWS_ACCESSS_KEY_ID'],
    secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
    params: {
      Bucket: 'alexjray.com',
      ACL: 'public-read'
    }
  };

  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create(s3Config);

  var headers = { 'Cache-Control': 'max-age=315360000, no-transform, public' };

  return gulp.src(build+'/**')
       // publisher will add Content-Length, Content-Type and headers specified above
       // If not specified it will set x-amz-acl to public-read by default
       .pipe(publisher.publish(headers))

       // create a cache file to speed up consecutive uploads
       .pipe(publisher.cache())

        // print upload updates to console
       .pipe(awspublish.reporter());

});
