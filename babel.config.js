const presets = [
    [
        '@babel/preset-env',
        {
            debug: true,
        },
    ],
    '@babel/preset-react',
];

const plugins = [
    [
        'module-resolver',
        {
            root: ['./src'],
            extensions: ['.ios.js', '.android.js', '.js', '.json'],
            alias: {
                utils: './components/utils',
                components: './components',
                theme: './themes',
                images: './images',
                routes: './routes',
                sharedComponents: './sharedComponent',
                screens: './screens',
            },
            cwd: 'packagejson',
        },
    ],
];

module.exports = { presets, plugins };
