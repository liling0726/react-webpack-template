const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
function genCssLoader({ modules, sourceMap, extract }) {
    const commonCssLoaders = [extract ? MiniCssExtractPlugin.loader : 'style-loader'];
    return [
        ...commonCssLoaders,
        {
            loader: 'css-loader',
            options: {
                sourceMap: sourceMap,
                importLoaders: 1,
                modules: modules,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions:{
                    plugins:[
                        'postcss-flexbugs-fixes',
                        ['postcss-preset-env',{
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            stage: 3,
                        }],
                    ]
                },
                sourceMap: sourceMap,
            },
        },
    ];
}

module.exports = function({ extract, sourceMap, options = {} }) {
    return [
        {
            test: /\.module\.less$/,
            use: [
                ...genCssLoader({ 
                    extract, sourceMap, modules: {
                        mode: 'local',
                        localIdentName:'[path][name]__[local]'
                    }
                }),
                {
                    loader: 'less-loader',
                },
            ],
        },
        {
            test: /\.less$/,
            exclude: /\.module\.less$/,
            use: [
                ...genCssLoader({ extract, sourceMap, modules: false }),

                {
                    loader: 'less-loader',
                },
            ],
        },
        {
            test: /\.css$/,
            use: genCssLoader({ extract, sourceMap, modules: false }),
        },
    ];
};
