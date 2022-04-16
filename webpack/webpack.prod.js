// const path = require('path');
// const outputDirectory = 'dist';
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* Deterministic Hashes for Caching */
// const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
// const WebpackChunkHash = require('webpack-chunk-hash');

// Must be load file .env for dotenv configuration time
// to use to access data for devServer and another places
path = require('path');
envPath = path.join(__dirname, '..', '.env.production');

require('dotenv').config({path: envPath});

module.exports = merge(common, {
  mode: 'production',    
  // output: {    
  //   path: path.resolve(__dirname, outputDirectory),
  //   filename: '[name].[chunkhash].js'
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
    new HtmlWebpackPlugin({    
      title: 'Production',  
      template: './public/index.html',
      favicon: './public/favicon.ico'      
    }),
    new webpack.EnvironmentPlugin({ ...process.env }),
    // new webpack.HashedModuleIdsPlugin(),
    // new WebpackChunkHash(),
    // new ChunkManifestPlugin({
    //   filename: 'chunk-manifest.json',
    //   manifestVariable: 'webpackManifest',
    //   inlineManifest: true,
    // })
  ]
});