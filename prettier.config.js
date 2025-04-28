/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
};
