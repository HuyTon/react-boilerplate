const path = require('path');
const outputDirectory = 'dist';
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {  
  entry: ['babel-polyfill', './src/index.js'],
  output: {    
    path: path.resolve(__dirname, outputDirectory),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
        // loader: 'url-loader?limit=100000'
        use: {
          loader: 'file-loader',
          options: { name: '[name].[hash].[ext]' }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      // Due to this file 'webpack.common.js' is placed inside the folder webpack. 
      // Then, we need to specify the path with '../src/'. Otherwise, it should be 'src/'. 
      '@pages': path.resolve(__dirname, '../src/pages/'),
      '@components': path.resolve(__dirname, '../src/common/components/'),
      '@utilities': path.resolve(__dirname, '../src/utilities/'),
      '@services': path.resolve(__dirname, '../src/services/'),
      '@store': path.resolve(__dirname, '../src/store/'),
      '@logs': path.resolve(__dirname, '../src/logs/'),
      '@cache': path.resolve(__dirname, '../src/cache/')
    }
  },
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },  
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      })
    ],
    runtimeChunk: false,
    // This optimization assigns modules to cache groups.   
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'shopcrush',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    // New moment.js optimization
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
  ]  
};