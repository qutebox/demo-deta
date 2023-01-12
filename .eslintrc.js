module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './'], ['~', './']],
      },
    },
    'import/core-modules': ['vue', 'vuex'],
  },
  rules: {
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'warn',
    'vue/no-v-html': 'off',
    camelcase: 'off',
  },
};
