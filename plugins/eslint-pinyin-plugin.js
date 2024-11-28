import { avoidPinyinRule } from '../rules/avoid-name-pinyin.js';

export const eslintPinyinPlugin = {
  rules: {
    'avoid-pinyin': avoidPinyinRule,
  },
};
