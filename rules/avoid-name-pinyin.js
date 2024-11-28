export const avoidPinyinRule = {
  meta: {
    messages: {
      avoidPinyin: '不能使用pinyin',
    },
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === 'pinyin') {
          context.report({
            node,
            messageId: 'avoidPinyin',
            data: {
              name: node.name,
            },
          });
        }
      },
    };
  },
};
