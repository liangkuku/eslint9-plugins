import { eslintPinyinPlugin } from './plugins/eslint-pinyin-plugin.js';
export default [
  {
    files: ['src/**/*.js'],
    plugins: {
      pinyin: eslintPinyinPlugin,
    },
    rules: {
      'pinyin/avoid-pinyin': 'error',
    },
  },
];
