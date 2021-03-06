const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
module.exports ={
    output: {
        path: path.resolve(__dirname,'../build/static'),
        publicPath: '/',
        filename: 'js/[name].boundle.js',
        chunkFilename: 'js/[name].[contenthash:8].js',
        clean:true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.less', '.css'],
    },
    module:{
        rules: [
            {
                test: /(\.jsx?$)|(\.tsx?$)/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory',
                        options: {
                            presets: ['@babel/env', '@babel/preset-react'],
                            plugins: [
                                isDevelopment && require.resolve('react-refresh/babel'),
                              ].filter(Boolean),
                        }
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|ico|pdf)$/,
                loader: 'url-loader',
                options: {
                    limit: 40000,
                    name: 'i/[name].[contenthash:8].[ext]',
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: /(\.jsx?$)|(\.tsx?$)/,
                use: [
                    '@svgr/webpack',
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            minetype: 'image/svg+xml',
                            name: 'i/[name].[contenthash:8].[ext]',
                        },
                    }
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: /(\.css?$)|(\.less?$)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            minetype: 'image/svg+xml',
                            name: 'i/[name].[contenthash:8].[ext]',
                        },
                    }
                ],
            },
            {
                test: /\.(gif|eot|ttf|otf|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: 'i/[name].[contenthash:8].[ext]',
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'i/[name].[contenthash:8].[ext]',
                },
            }
        ],
    },
    plugins:[
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '../build/dll/vendors.dll.js') // ????????? dll ????????????
        }),
        new webpack.DllReferencePlugin({
            // ???dll.config??????DllPlugin???context??????
            context: process.cwd(), 
            // dll???????????????manifest??????
            manifest: path.resolve(__dirname,'../build/dll','vendors-manifest.json'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/index.html')
        })
    ]
}