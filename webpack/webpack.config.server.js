import path from 'path';
import webpack from 'webpack';
import qs from 'querystring';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const root = process.cwd();
const src  = path.join(root, 'src');
const build = path.join(root, 'build');
const universal = path.join(src, 'universal');
const server = path.join(src, 'server');
import dotenv from 'dotenv';

dotenv.config();

const serverInclude = [
  server,
  universal
];

const cssLoaderConfig  = {
  modules: true,
  importLoaders: 1,
  localIdentName: '[name]_[local]_[hash:base64:5]'
};

export default {
  context: src,
  entry: {
    prerender: 'universal/routes/index.js'
  },
  target: 'node',
  output: {
    path: build,
    chunkFilename: '[name]_[chunkhash].js',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: process.env['STATIC_ASSETS_DIR']
  },

  // ignore anything that throws warnings & doesn't affect the view
  externals: [
    'isomorphic-fetch',
    'es6-promisify'
  ],

  // Mock nodes dns and net so that the Joi library dosen't break : (
  node: {
    dns: 'mock',
    net: 'mock'
  },

  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules']
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    new webpack.DefinePlugin({
      '__CLIENT__': false,
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
        loaders: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader', options: cssLoaderConfig},
            'less-loader'
            ]
          }),
        include: serverInclude
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: serverInclude
      }

    ]
  }
};
