const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

const {baseWebpackConfig, pluginCreators} = require('./shared');

module.exports = {
  mode: 'none',
  watch: true,
  entry: baseWebpackConfig.entry,
  output: baseWebpackConfig.output,
  module: {
    rules: baseWebpackConfig.module.rules,
  },
  resolve: {
    extensions: baseWebpackConfig.resolve.extensions,
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
    pluginCreators.createAssetsWebpackPlugin(),
  ],
};
