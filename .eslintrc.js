module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['html', 'json'],
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-prototype-builtins': 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    semi: [1, 'never'],
    quotes: [1, 'single'],
    'max-len': [
      1,
      {
        code: 120
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
