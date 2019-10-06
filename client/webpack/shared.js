const AssetsWebpackPlugin = require('assets-webpack-plugin');
const path = require('path');

const javaScriptRoot = path.join(__dirname, '../src'); // -> "{project-root}/client/src"
const publicationRoot = path.join(__dirname, '../../public/client'); // -> "{project-root}/public/client"
const temporaryFilesRoot = path.join(__dirname, '../tmp'); // -> "{project-root}/client/tmp"

const baseWebpackConfig = {
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
};

const pluginCreators = {
  createAssetsWebpackPlugin: () => {
    return new AssetsWebpackPlugin({
      filename: 'webpack-manifest.json',
      path: temporaryFilesRoot,
    });
  },
};

module.exports = {
  baseWebpackConfig,
  pluginCreators,
};
