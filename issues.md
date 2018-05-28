# 问题点

1. pug img src不支持问题

使用require: img(src=require('../../common/images/door@3x_center.png'), alt='')


2. 不自动刷新, 替换但未刷新 Nothing hot updated, js可以

> ExtractTextPlugin 的问题

开发环境未启用
正式环境启用 分离css文件

3. 样式打包到一个js文件 加上name命名

new ExtractTextPlugin('static/css/[name].[hash:6].min.css'),

4. 图标拷贝

5. 面向属性css命名

6. 自动生成入口文件