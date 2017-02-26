require('babel-register');
try {
module.exports = require('./webpack.config.server.js');
} catch (e){
  console.error(e);
}
