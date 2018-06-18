String.prototype.myQueryURLParameter = function myQueryURLParameter() {
    var obj = {};
    this.replace(/([^?&=#]+)=([^?&=#]+)/g, function () {
        obj[arguments[1]] = arguments[2];
    });
    this.replace(/#([^?=&#]+)/g, function () {
        obj['HASH'] = arguments[1];
    });
    return obj;
};
var url = 'http://www.zhufengpeixun.cn/stu/index.html?name=zxt&age=28&sex=0#teacher';
//=>{name:'zxt',age:28,sex:0,HASH:'teacher'}
console.log(url.myQueryURLParameter());



