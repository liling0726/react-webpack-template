const webpack = require('webpack');
const path = require('path');
module.exports = {
    mode: 'development',
    entry:{
        vendors:[
            'react',
            'react-dom'
        ],
    },
    output:{
        path: path.resolve(__dirname, '../build/dll'),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
        libraryTarget: 'this'
    },
    plugins: [
        new webpack.DllPlugin({
            // manifest缓存文件的请求上下文（默认为webpack执行环境上下文）
            context: process.cwd(),
            // manifest.json文件的输出位置
            path: path.resolve(__dirname,'../build/dll','[name]-manifest.json'),
            // 定义打包的公共vendor文件对外暴露的函数名
            name: '[name]_[hash]'
        })
    ]
}