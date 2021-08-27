const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge')
const generateStyleLoaders = require('./webpack.loader');
const webpackBaseConfig = require('./webpack.base');
const { beforeServer } = require('./webpack.server');

const path = require('path');
let config;
try {
     config = require(path.resolve(__dirname,'../server.config.js'))
} catch (error) {
    config ={
        mockType:  process.env.mockType|| 'mock'
    }
}

module.exports =merge(webpackBaseConfig,{
    mode: 'development',
    devtool:'eval-cheap-module-source-map',
    devServer: {
        open: true,
        hot: true,
        static: {
          directory: path.join(__dirname, '../build'),
        },
        compress: true,
        port: 9000,
        onBeforeSetupMiddleware:  (server)=>{
            beforeServer(server,config.mockType)
        },
        proxy: config.proxy
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    module:{
        rules: [
            ...generateStyleLoaders({
                sourceMap: true,
                extract: false,
            }),
        ],
    }
})