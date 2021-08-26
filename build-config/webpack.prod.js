const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBaseConfig = require('./webpack.base');
const generateStyleLoaders = require('./webpack.loader');
module.exports =merge(webpackBaseConfig,{
    devtool:'source-map',
    mode: 'production',
    optimization:{
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        ignoreOrder: true
    })],
    module: {
        rules:[
            ...generateStyleLoaders({
                extract: true,
                sourceMap:false
            })
        ]
    }
})