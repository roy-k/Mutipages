import '../home.pug'

import '../css/app.styl'


console.log('home test2');

if (module.hot) {

    console.log('有');
    
    module.hot.accept('../css/app.styl', function() {
      // 使用更新过的 library 模块执行某些操作...
      let style = require('../css/app.styl');
    })
  }
