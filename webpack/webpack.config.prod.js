import path from 'path';
import webpack from 'webpack';
import qs from 'querystring';
import autoprefixer from 'autoprefixer';
import AssetsPlugin from 'assets-webpack-plugin';
import dotenv from 'dotenv';

dotenv.config();

const root = process.cwd();
const src  = path.join(root, 'src');
const build = path.join(root, 'build');

const client = path.join(src, 'client');
const universal = path.join(src, 'universal');

const cssLoaderConfig  = {
  modules: true,
  importLoaders: 1,
  localIdentName: '[name]_[local]_[hash:base64:5]'
};

const postCssLoaderConfig = {
  options: {
    plugins: function () {
      return [
        require('autoprefixer')
      ];
    }
  }
};

const clientInclude = [
  client,
  universal
];

// Cache vendor && client javascript on CDN...
const vendor = [
  'react',
  'react-dom',
  'react-router',
  'react-redux',
  'redux'
];

export default {
  context: src,
  entry: {
    app: ['babel-polyfill', 'client/client.js'],
    vendor: vendor
  },
  output: {
    filename: '[name]_[chunkhash].js',
    chunkFilename: '[name]_[chunkhash].js',
    path: build,
    publicPath: process.env['STATIC_ASSETS_DIR']
  },
  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules'],
    unsafeCache: true
  },
  node: {
    dns: 'mock',
    net: 'mock'
  },
  plugins: [
   new webpack.NamedModulesPlugin(),
   new webpack.optimize.CommonsChunkPlugin({
     names: ['vendor', 'manifest'],
     minChunks: Infinity
   }),
   new webpack.optimize.AggressiveMergingPlugin(),
   new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}),
   new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}, comments: /(?:)/}),
   new AssetsPlugin({path: build, filename: 'assets.json'}),
   new webpack.NoEmitOnErrorsPlugin(),
   new webpack.DefinePlugin({
     '__CLIENT__': true,
     '__PRODUCTION__': true,
     'process.env.NODE_ENV': JSON.stringify('production')
   })
 ],

 module: {
   loaders: [
     {test: /\.json$/, loader: 'json-loader'},
     {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|mov)$/, loader: 'url-loader?limit=10000'},
     {test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader'},

     // CSS
     {
       test: /\.(css|less)$/,
       include: clientInclude,
       use:[
         'style-loader',
         {loader: 'css-loader', options: cssLoaderConfig},
         {
           loader: 'postcss-loader',
           options: {
             plugins: [autoprefixer]
           }
         },
         'less-loader'
       ]
     },

     // JS
     {
       test: /\.js$/,
       loader: 'babel-loader',
       include: clientInclude
     }

   ]
 }
}
