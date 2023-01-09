module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['coverage/', 'cypress/', '*.snapshot.test.js'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-duplicates': 'error',
    complexity: ['error', 8],
    'max-lines': ['error', { max: 200, skipComments: true }],
    'max-depth': ['error', 3],
    'max-params': ['error', 4],
    eqeqeq: ['error', 'smart'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'no-shadow': 'off',
    'prefer-const': 'error',
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: 'components/**', group: 'internal' },
          { pattern: '__fixtures__/**', group: 'internal' },
          { pattern: 'libs/**', group: 'internal' },
          { pattern: '__mocks__/**', group: 'internal' },
          { pattern: 'redux/**', group: 'internal' },
          { pattern: 'routes*', group: 'internal' },
          { pattern: 'services/**', group: 'internal' },
          { pattern: 'stylesheet**', group: 'internal' },
          { pattern: 'translations/**', group: 'internal' },
          { pattern: 'testUtils/**', group: 'internal' },
          { pattern: 'shared/**', group: 'internal' },
          { pattern: 'contents/**', group: 'internal' },
        ],
        groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-export-all/sort-export-all': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'no-restricted-imports': [
      'error',
      // Lodash tree shaking isn't working so directly importing lodash results in importing the whole library.
      // This rule should prevent importing the whole lodash library.
      // https://lodash.com/per-method-packages
      {
        paths: [
          { name: 'lodash', message: 'Please use lodash/{module} import instead' },
          { name: '.', message: 'Please use explicit import file' },
        ],
        patterns: [
          {
            group: ['@uno/*/'],
            message: 'Please import @uno modules directly, without using sub directories',
          },
        ],
      },
    ],
    'no-restricted-syntax': [
      'error',
      // https://eslint.org/docs/latest/developer-guide/selectors#restricting-syntax-with-selectors
      {
        selector: 'IfStatement > :not(BlockStatement).consequent',
        message: 'Single line if statement is not allowed',
      },
    ],
  },
  plugins: ['import', 'prefer-arrow', 'sort-export-all'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/prefer-optional-chain': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': 'allow-with-description',
            minimumDescriptionLength: 10,
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              FC: 'Use `const MyComponent = (props: Props): JSX.Element` instead',
              SFC: 'Use `const MyComponent = (props: Props): JSX.Element` instead',
              FunctionComponent: 'Use `const MyComponent = (props: Props): JSX.Element` instead',
              'React.FC': 'Use `const MyComponent = (props: Props): JSX.Element` instead',
              'React.SFC': 'Use `const MyComponent = (props: Props): JSX.Element` instead',
              'React.FunctionComponent':
                'Use `const MyComponent = (props: Props): JSX.Element` instead',
            },
            extendDefaults: true,
          },
        ],
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: {
              // Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns void (such as React button clicks)
              // cf. https://github.com/typescript-eslint/typescript-eslint/blob/v5.23.0/packages/eslint-plugin/docs/rules/no-misused-promises.md#checksvoidreturn
              // PR : https://github.com/typescript-eslint/typescript-eslint/pull/4623
              attributes: false,
            },
          },
        ],
      },
    },
  ],
};
