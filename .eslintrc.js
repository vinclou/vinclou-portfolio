module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y'],
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    'react/prop-types': [
      'enabled',
      { ignore: 'ignore', customValidators: 'customValidator' }
    ],
    'react/react-in-jsx-scope': 'off'
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};