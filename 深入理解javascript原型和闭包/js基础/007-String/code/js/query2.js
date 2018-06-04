function queryURLParameter(url) {
    //=>url:传递的参数(我们当前要解析的URL地址)
    var quesIndex = url.indexOf('?'),
        obj = {};
    if (quesIndex === -1) {//->url中没有问号传参:直接返回空对象
        return obj;
    }
    url = url.substr(quesIndex + 1);
    var ary = url.split('&');
    for (var i = 0; i < ary.length; i++) {
        var curAry = ary[i].split('=');
        obj[curAry[0]] = curAry[1];
    }
    return obj;
}


console.log(queryURLParameter('https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1'));

console.log(queryURLParameter('https://www.baidu.com/s?wd=node'));

