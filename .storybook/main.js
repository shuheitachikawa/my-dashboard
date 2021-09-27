const path = require('path');

module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (baseConfig) => {
    // @see https://github.com/storybookjs/storybook/issues/3916#issuecomment-407681239
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve('src')
    ];
    return {...baseConfig};
  }
};
