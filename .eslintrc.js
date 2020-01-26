module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-sequences": "off",
    "padded-blocks": "off",
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": true,
      "allowEmptyLines": true
    }],
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "no-unreachable": "off",
    "vue/singleline-html-element-content-newline": "off",
    "no-useless-return": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/no-v-html": "off"
  }
}
