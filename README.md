
### 当前webpack环境
目前最新
``` 
    "webpack": "^5.48.0",
    "webpack-cli": "^4.7.0",
    "webpack-dev-server": "^4.0.0",
```

## 功能
- less 转换
- 热更新
- babel
- webpack-html-plugin
- react-refresh
## dev 
### 本地数据mock，js文件
```
module.exports = {
    "result":1
}
module.exports = ()=>{
    return {
        result:1,
    }
}
```
### less 转换
 less-loader, css-loader, style-loader 创建style标签，并将css添加进去
### babel 
- 按需引入pollyfill @babel/preset-env中useBuiltIns为'usage'
- babel-plugin-jsx-control-statements 使用If Choose,When 
- [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators#docsNav) class 装饰器

```
@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}
```
 
-  @babel/plugin-transform-runtime @babel/runtime-corejs3  
    解决的问题：  
    1. pollyfill直接修改全部变量的原型，可能会带来意想不到的问题，例如例如 Array.from 等静态方法，直接在 global.Array 上添加；对于例如 includes 等实例方法，直接在 global.Array.prototype 上添加
    2. babel转换的时候，会有一些辅助函数帮助转化，而这些函数在每个文件中重新定义

- @babel/plugin-syntax-dynamic-import（ie11以下有问题，需引入babel-plugin-dynamic-import-polyfill ）
 使代码中能够使用import()动态引入文件

 ###  处理图片和字体（url-loader，file-loader）
，动图之类的之间转成地址，其他小于10k，则会转化成base64
```

{
    test: /\.(png|jpe?g|ico|pdf)$/,
    loader: 'url-loader',
    options: {
        limit: 10 * 1024,
        name: 'i/[name].[contenthash:8].[ext]',
    },
},
{
    test: /\.(gif|eot|ttf|otf|woff2?)$/,
    loader: 'file-loader',
    options: {
        name: 'i/[name].[contenthash:8].[ext]',
    },
},
```
### 处理svg
在css样式中处理成图片形式，在js中可以已组件形式引入
```
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
```
### 处理音频
```
{
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    options: {
        limit: 1024,
        name: 'i/[name].[contenthash:8].[ext]',
    },
}

```

### 热更新
react-refresh @pmmmwh/react-refresh-webpack-plugin   
在当前的环境中有问题，@pmmmwh/react-refresh-webpack-plugin中依赖react-refresh@">=0.8.3 <0.10.0"，并且webpack-dev-server@"3.x"，所以还是选用react-hot-loader，目前环境的devserver为4.0.0
```

dev webpack-dev-server@"^4.0.0" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer webpack-dev-server@"3.x" from @pmmmwh/react-refresh-webpack-plugin@0.4.3
```
解决办法： npm i --legacy-peer-deps 

--legacy-peer-deps标志是在v7中引入的，目的是绕过peerDependency自动安装；它告诉 NPM 忽略项目中引入的各个modules之间的相同modules但不同版本的问题并继续安装，保证各个引入的依赖之间对自身所使用的不同版本modules共存。
