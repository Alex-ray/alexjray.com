require('babel-register');
try {
  module.exports = require('./webpack.config.prod');
} catch (error) {
  console.error(error);
}
