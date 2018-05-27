# 使用模板技术(pug), 搭建 低复杂度组件化 多页面应用

> [本项目](https://github.com/roy-k/pugMutipages)是根据webpack多页面配置, 结合pug模板能力实现.

> 适合官网类, 偏静态, 含重复布局的项目. 无框架

> 涉及: pug模板语法, stylus(可选), es6+语法(可选)

## 实现概览图

<div  align="center">
<img src="http://47.52.170.75/images/blog/project/398298fe22493.jpg" width = "800" alt="" align=center />
</div>

## 代码解析

### 目录介绍

todo:
    - 补充根模板
    - 修改文件
    - 去除项目相关代码

### 构建配置

1. 入口文件

2. webpack配置关键点

    - 入口

    - 别名

    - html-webpack-plugin配置

    - cdn相关

### 页面结构







## issues

1. pug img src不支持问题

使用require: img(src=require('../../common/images/xx.png'), alt='')


2. css热替换出错, 替换但未刷新 Nothing hot updated

> ExtractTextPlugin 的问题

开发环境未启用
正式环境启用 分离css文件

3. 模板文件修改不自动刷新

4. 待优化: 入口依赖需自动关联

## 参考

- [多页为王：webpack多页应用架构专题系列](https://array_huang.coding.me/webpack-book/)
- [pug文档](https://pugjs.org/zh-cn/api/getting-started.html)
