const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')

const {names} = require('./pages.js')

function checkFile(path) {
    return new Promise((res, rej) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            res(!err)
        })
    })
}

const pugTemplateStr = (name) => {
    return `extends ./template.pug
block content
    include ../../pages/${name}/${name}.pug`
}


async function checkAndMakeEntry(paths) {
    paths.map(async (v) => {
        const fp = path.resolve(__dirname, `../src/common/entry/${v}.pug`);
        const isEx = await checkFile(fp);
        if(!isEx) {
            const isOk = await fsPromises.writeFile(fp, pugTemplateStr(v))
            if(isOk) {
                console.log('创建文件成功', v);
            }
        }
    })
}

const check = () => {
    checkAndMakeEntry(names)
}

module.exports = check