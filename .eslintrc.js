const path = require('path');
module.exports = {
    'parser': 'babel-eslint',
    'extends': 'airbnb',
    'settings': {
        'import/resolver': {
            'node': {
                'paths': [path.resolve(__dirname, './src')],
            },
        },
    },
    'env': {
        'browser': true,
        'es6': true,
        "jest": true
    },
    'plugins': [
        'react',
        'react-hooks',
    ],
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        'react/no-array-index-key': 0,
        'react/prop-types': 0,
        'react/no-unused-prop-types': 0,
        'react/destructuring-assignment': 0,
        'import/no-cycle': 0,
        'react/sort-comp': 0,
        'react/jsx-curly-brace-presence': 0,
        'react/no-unescaped-entities': 0,
        'react/react-in-jsx-scope': 'off',
        'arrow-body-style': [2, 'as-needed'],
        'comma-dangle': [2, 'always-multiline'],
        'import/imports-first': 0,
        'import/newline-after-import': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/extensions': 'off',
        'import/prefer-default-export': 0,
        'indent': [
            2,
            2,
            {
                'SwitchCase': 1,
            },
        ],
        'newline-per-chained-call': 0,
        'no-confusing-arrow': 0,
        'no-console': 1,
        'no-use-before-define': 0,
        'prefer-template': 2,
        'class-methods-use-this': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'require-yield': 0,
        'import/no-webpack-loader-syntax': 0,
        'linebreak-style': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
    },
};
