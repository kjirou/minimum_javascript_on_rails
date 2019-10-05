const AssetsPlugin = require('assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const javaScriptRoot = path.join(__dirname, '../src'); // -> "{project-root}/client/src"
const publicationRoot = path.join(__dirname, '../../public/client'); // -> "{project-root}/public/client"
const temporaryFilesRoot = path.join(__dirname, '../tmp'); // -> "{project-root}/client/tmp"

module.exports = {
  mode: 'none',
  watch: true,
  entry: {
    'webpacked': path.join(javaScriptRoot, 'index.js'),
  },
  output: {
    filename: '[name]-[chunkhash].js',
    path: publicationRoot,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // This is similar to `npm run clean`.
    // If `npm run clean` does not needed to be independent, it can be included in `npm run build`.
    new CleanWebpackPlugin(),
    // This sets an environment variable that is enabled in build process on webpack.
    // Many npm packages refer to the `NODE_ENV` value to change the build behavior.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new AssetsPlugin({
      filename: 'webpack-manifest.json',
      path: temporaryFilesRoot,
    }),
  ],
};
