/**
 * Created by folgerfan on 2016/7/28.
 */
module.exports = function(str="") {
    let salt = 5318;
    for (let i = 0, len = str.length; i < len; ++i) {
        salt += (salt << 5) + str.charAt(i).charCodeAt(0);
    }
    return salt & 0x7fffffff;
};

