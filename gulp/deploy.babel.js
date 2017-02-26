require('babel-register');

try {
  module.exports = require('./Gulpfile.js');
} catch (error) {
  console.error(error);
}
