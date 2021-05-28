const {baseWebpackConfig, pluginCreators} = require('./shared');

module.exports = {
  mode: 'production',
  entry: baseWebpackConfig.entry,
  output: baseWebpackConfig.output,
  module: {
    rules: baseWebpackConfig.module.rules,
  },
  resolve: {
    extensions: baseWebpackConfig.resolve.extensions,
  },
  plugins: [
    pluginCreators.createAssetsWebpackPlugin(),
  ],
};
