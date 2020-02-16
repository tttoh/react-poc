module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-console': 'off',
        //'no-console': ['error', { allow: ['warn', 'error'] }],
        'react/require-default-props': 'off',
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    },
};
