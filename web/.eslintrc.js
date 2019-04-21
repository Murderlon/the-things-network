module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['standard'],
  plugins: ['standard', 'react', 'react-hooks'],
  rules: {
    'no-var': 'error',
    'no-unused-vars': 1,
    'arrow-spacing': ['error', { before: true, after: true }],
    indent: ['error', 2],
    'comma-dangle': [
      'error',
      {
        objects: 'only-multiline',
        arrays: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],

    // options to emulate prettier setup
    semi: ['error', 'never'],
    'max-len': ['error', { code: 90 }],
    'template-curly-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],

    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'never',
        asyncArrow: 'always'
      }
    ],

    // standard plugin - options
    'standard/object-curly-even-spacing': ['error', 'either'],
    'standard/array-bracket-even-spacing': ['error', 'either'],
    'standard/computed-property-even-spacing': ['error', 'even'],
    'standard/no-callback-literal': ['error', ['cb', 'callback']],

    // react plugin - options
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8
  }
}
