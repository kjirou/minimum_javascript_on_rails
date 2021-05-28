module.exports = function(api) {
  const isTest = api.env('test');

  const babelPresetEnvOptions = isTest
    ? {
      targets: {
        node: 'current',
      },
    }
    : {
      forceAllTransforms: true,
    };

  return {
    presets: [
      [
        '@babel/preset-env',
        babelPresetEnvOptions,
      ],
    ],
  };
}
