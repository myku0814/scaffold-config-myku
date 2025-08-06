require('@myku0814/public-config-myku/eslint/patch');
/* eslint-env node */
module.exports = {
  root: true, // prevent eslint look up the config file
  extends: [require.resolve('@myku0814/public-config-myku/eslint/node-ts')], // eslint cannot support sub-path under a package, the require syntax is required
  ignorePatterns: ['algorithm/**', "src/dev/**", "src/**/*.bak.*", "src/**/*.cp.*", "src/**/__tests__/*"],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {},
};
