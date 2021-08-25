module.exports = (api, opts) => {
    api.cache.forever();
    return {
        sourceType: 'unambiguous',
        presets: [
            '@babel/preset-typescript',
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'usage',
                    targets: {
                        browsers: ['> 1%', 'last 2 versions', 'ie >= 10'],
                    },
                },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            'babel-plugin-jsx-control-statements',
            [
                '@babel/plugin-proposal-decorators',
                {
                    legacy: true,
                },
            ],
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs: 3,
                },
            ],
            '@babel/plugin-syntax-dynamic-import'
        ],
    };
};

