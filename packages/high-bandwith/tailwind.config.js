/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  ...require('@polar-view/core').tailwindConfig,
  content: ['./**/*.ts', './**/*.tsx', './styles/global.css'],
};
