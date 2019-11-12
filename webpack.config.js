const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const mock = require('./config/mock');


module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8000,
    hot: true,
    overlay: true,
    before: function (app) {
      app.use(mock);
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'react-web',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      },
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: [
          'url-loader'
        ]
      }
    ]
  }
}