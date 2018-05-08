import $ from 'zepto-webpack'
if(location.href.indexOf('debug') > -1) {
    const debug = $('.debug');

    const section1H = $('.section1').height();

    console.log(section1H);
    

    debug.show()
}