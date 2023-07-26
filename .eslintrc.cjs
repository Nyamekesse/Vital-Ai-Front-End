module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['*.css'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  plugins: ['@typescript-eslint', 'react', 'react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/indent': 'off',
    'function-paren-newline': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-props-no-spreading': 'off',
    'import/no-named-default': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
