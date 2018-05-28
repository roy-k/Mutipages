# 利用模板技术(pug), 搭建低复杂度/组件化的多页面应用

> [本项目](https://github.com/roy-k/Mutipages)是根据webpack多页面配置, 结合pug模板能力实现.

> 适合官网类, 偏静态, 含重复布局的项目. 无框架

> 涉及: pug模板语法, stylus(可选), es6+语法(可选)

## 实现概览图

<div  align="center">
<img src="http://47.52.170.75/images/blog/project/01db9e862954a.png" width = "931" alt="" align=center />
</div>

## 代码解析

### 目录介绍

<div style="float:right;">
    <img src='http://47.52.170.75/images/blog/project/575ba7c9f0964.png' style='float:right; width:236px;height:507px'/>
</div>


1. common 静态(公共)文件

    - entry 入口目录, 根据 pages 子文件夹, 自动生成入口文件.

2. pages 开发目录

    - _chips 组件文件夹

    - 文件夹名.pug 即该页面主体代码

    - css/js 独特样式/逻辑

3. webpack 配置目录

    - pages.js 读取目录, 生成配置

    - checkEntry.js 自动生成入口文件

### webpack 相关配置

1. pages 导出配置

![pages](http://47.52.170.75/images/blog/project/a767b089b37d6.png)

2. webpack配置关键点

    - 入口
    
    ```javascript
        entry: {
            ...entrys,
            vendor: ['jquery']
        },
    ```   
    - html-webpack-plugin配置

    ```javascript
        ...htmlPluginArr.map(({filename, template, chunks}) => {
            return new HtmlWebpackPlugin({filename, template, chunks})
        }),
    ```    

### 页面组织

1. _chips 文件夹放组件, 如: 

![pages](http://47.52.170.75/images/blog/project/1a6345049f5bf.png)

2. pages/home/home.pug, 页面主体代码如: 

![pages](http://47.52.170.75/images/blog/project/9afb1810869a4.png)

3. 页面效果

![pages](http://47.52.170.75/images/blog/project/f635f29aaab47.png)


## issues

1. pug img src不支持问题

使用require: img(src=require('../../common/images/xx.png'), alt='')

可结合webpack别名, cool

2. css热替换出错, 替换但未刷新 Nothing hot updated

ExtractTextPlugin 的问题

开发环境关闭

正式环境启用 分离css文件

3. 模板文件修改不自动刷新

4. 未做模块分离等

## 参考

- [多页为王：webpack多页应用架构专题系列](https://array_huang.coding.me/webpack-book/)
- [pug文档](https://pugjs.org/zh-cn/api/getting-started.html)
