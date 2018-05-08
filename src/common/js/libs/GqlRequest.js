/**
 * Created by folgerfan on 2018/4/10.
 */
(function (root, GqlRequest) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['GqlRequest'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.GqlRequest = GqlRequest;
    }
}(this, function (method, params) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        var xhr = new XMLHttpRequest();
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.timeout = 30000;
        xhr.open("POST", "/" + method + "?_t" + new Date());
        xhr.onload = function () {
            if (xhr.status === 200) {
                let data = xhr.response;
                console.log(xhr);
                resolve(data)
            } else {
                // 处理其他情况
                console.error(arguments);
                reject()
            }
        };
        xhr.onerror = function () {
            // 处理错误
            console.error('http error', arguments);
            reject();
        };
        xhr.ontimeout = function (e) {
            console.error('timeout', e);
            reject('timeout');
        };
        xhr.send(JSON.stringify(params));
    })
}));
