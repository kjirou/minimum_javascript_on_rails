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
