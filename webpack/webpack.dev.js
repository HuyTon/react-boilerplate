const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Must be load file .env for dotenv configuration time
// to use to access data for devServer and another places
path = require('path');
envPath = path.join(__dirname, '..', '.env.development');

require('dotenv').config({path: envPath});

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    // Specify for response header
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      },
      port: 3000,
      open: true,
      proxy: {
      }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.EnvironmentPlugin( { ...process.env } ),
    // Turn on bundle analyzing libs size and information
    //new BundleAnalyzerPlugin()  
  ]
});