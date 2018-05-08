const fs = require('fs')
const path = require('path')

const dirs = fs.readdirSync(path.resolve(__dirname, '../src/pages'))

const pages = dirs.filter(v => v!=='.DS_Store')

const entrys = {}
const htmlPluginArr = []

pages.map(v => {
    entrys[v] = path.resolve(__dirname, `../src/pages/${v}/js/app.js`)
    htmlPluginArr.push({
        filename: `pages/${v}/index.html`,
        template: path.resolve(__dirname, `../src/common/template/entry/${v}.pug`),
        chunks: [v],
        // hash: true, // 为静态资源生成hash值
        minify: true,
        // xhtml: true,
      })
})

module.exports = {
    entrys,
    htmlPluginArr,
}



