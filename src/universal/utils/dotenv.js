/*
 * getDotenv()
 * processes .env file (if it exists). Sets process.env[VARS] as a
 * side-effect.
 *
 * Returns true.
 */

 import dotenv from 'dotenv';
 import dotenvExpand from 'dotenv-expand';

export function getDotenv() {
  var myEnv = dotenv.config({silent: true});   // eslint-disable-line
  console.log(myEnv);
  dotenvExpand(myEnv);

  return true;
}
