function queryURLParameter(url) {
    var indexAsk = url.indexOf('?'),
        obj = {};
    if (indexAsk === -1) return obj;
    url = url.substr(indexAsk + 1);
    var urlAry = url.split('&');
    for (var i = 0; i < urlAry.length; i++) {
        var item = urlAry[i],
            itemAry = item.split('=');
        obj[itemAry[0]] = itemAry[1];
    }
    return obj;
}
var result = queryURLParameter('http://www.zhufengpeixun.cn/stu/?name=zxt&age=27&sex=0');
console.log(result);
