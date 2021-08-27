const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackBaseConfig = require('./webpack.base');
const generateStyleLoaders = require('./webpack.loader');
const webpackProd =merge(webpackBaseConfig,{
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
if(process.env.NODE_ENV = 'test'){
    webpackProd.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = webpackProd;