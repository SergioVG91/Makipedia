/* eslint-disable indent */
const path = require('path');
//const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExctractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  entry: './src/frontend/index.js',
  mode: 'development',
  output: {
    path: '/',
    filename: 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(
              (chunk) => chunk.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name),
            );
          },
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExctractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: `
                @import 'src/frontend/assets/styles/base/_variables.scss';                
                @import 'src/frontend/assets/styles/base/_placeholders.scss';                
                @import 'src/frontend/assets/styles/base/_mixins.scss';
                
                `,
            },
          },
        ],
        /*   use: [
          {
            loader: MiniCssExctractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/assets/styles/base/_variables.scss',
                './src/assets/styles/base/_placeholders.scss',
                './src/assets/styles/base/_mixins.scss',
              ],
            },
          },
        ],*/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    //  new HtmlWebPackPlugin({
    //   template: './public/index.html',
    //   filename: './index.html',
    // }),
    new MiniCssExctractPlugin({
      filename: 'assets/app.css',
    }),
  ],
};
