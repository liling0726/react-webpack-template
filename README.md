## 功能
- less 转换
- 热更新
- babel
- webpack-html-plugin
- react-refresh
### dev 
- 本地数据mock，js文件
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
- less 转换
 less-loader, css-loader, style-loader 创建style标签，并将css添加进去
- 按需引入pollyfill
- babel-plugin-jsx-control-statements 使用If Choose,When 
- [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators#docsNav) class 装饰器
```
@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}
```
- @babel/plugin-transform-runtime @babel/runtime-corejs3
解决问题：
1. pollyfill直接修改全部变量的原型，可能会带来意想不到的问题，例如例如 Array.from 等静态方法，直接在 global.Array 上添加；对于例如 includes 等实例方法，直接在 global.Array.prototype 上添加
2. babel转换的时候，会有一些辅助函数帮助转化，而这些函数在每个文件中重新定义

- @babel/plugin-syntax-dynamic-import（ie11以下有问题，需引入babel-plugin-dynamic-import-polyfill ）
 使代码中能够使用import()动态引入文件


