import path from 'path';
import webpack from 'webpack';
import qs from 'querystring';
import autoprefixer from 'autoprefixer';

const root = process.cwd();
const src  = path.join(root, 'src');

const clientSrc    = path.join(src, 'client');
const universalSrc = path.join(src, 'universal');


const clientInclude = [clientSrc, universalSrc];

const cssLoaderConfig  = {
  modules: true,
  importLoaders: 1,
  localIdentName: '[name]_[local]_[hash:base64:5]'
};


const babelQuery = {
  "env": {
     "development": {
       "presets": ["react-hmre"],
       "plugins": [
         ["react-transform", {
           "transforms": [{
             "transform": "react-transform-hmr",
             "imports": ["react"],
             "locals": ["module"]
           }]
         }]
       ]
     }
   }
};


export default {
  devtool: 'eval',
  context: src,
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './client/client.js'
    ]
  },
  output: {
    filename: 'app.js',
    chunkFilename: '[name]_[chunkhash].js',
    path: path.join(root, 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': false,
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  resolve: {
    extensions: ['*', '.js'],
    modules: [src, 'node_modules']
  },
  module: {
    loaders: [
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000'},
      {test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader'},

      // Javascript
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: babelQuery,
        include: clientInclude
      },


      // CSS
      {
       test: /\.(css|less)$/,
       include: clientInclude,
       use: [
         'style-loader',
         {
           loader: 'css-loader',
           options: cssLoaderConfig
         },{
           loader: 'postcss-loader',
           options: {
             plugins: [autoprefixer]
           }
         },
         'less-loader'
       ]
     }
    ]
  }
};
