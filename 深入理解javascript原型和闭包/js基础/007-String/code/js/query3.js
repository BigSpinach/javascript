String.prototype.myQueryURLParameter = function myQueryURLParameter() {
    var obj = {},
        reg = /([^=?&]+)=([^=?&]+)/g;
    this.replace(reg, function () {
        var arg = arguments;
        obj[arg[1]] = arg[2];
    });
    return obj;
};
var str = 'https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1';
console.log(str.myQueryURLParameter());