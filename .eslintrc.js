module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'installedESLint': true,
  'parser': 'babel-eslint',
  'plugins': [
    'import',
  ],
  'globals': {
    "hexo": true,
  },
  'rules': {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn', {'allow': ['warn', 'error']}],
    'no-var': 'error',
    'no-unused-vars': ['warn', {'args': 'none'}],
    'semi': ['error', 'never'],
    'unicode-bom': 'error',
    'react/prop-types': 'off',
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js'],
        'paths': [__dirname],
      },
    },
    'import/core-modules': [
      'path-extra',
      'fs-extra',
    ],
  },
}
