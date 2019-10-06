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
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // This "forceAllTransforms" transforms sources for working on many browsers as possible.
                    //
                    // Normally, "@babel/preset-env" performs only the minimum necessary conversions
                    //   for the supported browsers specified by the "targets" option or the ".browserslistrc" file.
                    // So this option slows down the transpiling and increases the file size of the built ".js".
                    // But if you don't have to write a lot of JavaScript, you don't have to worry about it.
                    forceAllTransforms: true,
                  },
                ],
              ],
            },
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
