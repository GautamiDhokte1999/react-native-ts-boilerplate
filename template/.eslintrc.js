module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['jest', '@typescript-eslint', 'react-hooks', 'prettier', 'import'],
  parserOptions: {
    ecmaFeatures: {
      // specify which additional language features to use
      jsx: true,
    },
  },
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'global-require': 'off', // React Native images uses the require syntax so we're turning it off so that we don't get any errors
    'react-native/no-unused-styles': ['error'], // disallow unused styles
    'react-native/no-inline-styles': ['error'], // disallow styles declared within the component itself
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'arrow-body-style': ['error'],
    'import/no-cycle': ['error'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
