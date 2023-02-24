module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-boolean-value': 0,
    'no-param-reassign': 0,
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    // 'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'react/jsx-props-no-spreading': ['warn'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'all',
        jsxSingleQuote: true,
      },
    ],
    'no-console': 'off',
  },
};
