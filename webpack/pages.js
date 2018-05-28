const fs = require('fs')
const path = require('path')

const dirs = fs.readdirSync(path.resolve(__dirname, '../src/pages'))

const entrys = {}
const htmlPluginArr = []
const names = []

const pages = dirs.filter(v => v !== '.DS_Store' && v !== '_chips')

pages.map(v => {
    entrys[v] = path.resolve(__dirname, `../src/pages/${v}/js/app.js`)
    htmlPluginArr.push({
        filename: `pages/${v}/index.html`,
        template: path.resolve(__dirname, `../src/common/entry/${v}.pug`),
        chunks: [
            v, 'vendor'
        ],
        minify: true,
        // hash: true, // 为静态资源生成hash值 xhtml: true,
    })
    names.push(v)
})

module.exports = {
    entrys,             // 入口文件path
    htmlPluginArr,      // 插件配置
    names,              // 入口文件名, 用于自动生成文件
}