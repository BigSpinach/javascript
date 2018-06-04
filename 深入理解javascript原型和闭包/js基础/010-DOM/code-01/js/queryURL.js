/*
 * 在真实项目中当我们点击列表页面中的某一项，可以跳转到详情页面，在详情页面查看一些相关的信息；列表页面中点击不同项，在详情页面中也可以展示不同的信息；
 *  =>详情页面是一个（不是多个），如何在同一个详情页面中，区分出点击的是列表页面中的哪一条信息？
 *  =>URL问号传参：当点击列表页面中的每一项实现页面跳转的时候，我们向详情页面地址后面增加问号传参，在详情页面中，我们通过获取问号传递参数的值，展示不同的信息
 *  http://sports.qq.com/kbsweb/game.htm?mid=100000:1470183
 *  http://sports.qq.com/kbsweb/game.htm?mid=100000:1470184
 */

//=>获取URL地址中问号传递的参数值
function queryURLParameter(url) {
    //->url:'http://www.zhufengpeixun.cn/stu/?name=zxt&age=27&sex=0'
    //1、首先获取?在字符串中的索引，如果当前URL没有问号(没有传参)，我们返回一个空对象即可
    var indexAsk = url.indexOf('?'),
        obj = {};
    if (indexAsk === -1) return obj;

    //2、有问号，从问号的下一个索引开始，一直截取到字符串的末尾
    url = url.substring(indexAsk + 1);
    //->url:name=zxt&age=27&sex=0

    //3、按照链接符&，把截取的字符串进行拆分，分别存放在数组中
    var aryURL = url.split('&');
    //->aryURL:['name=zxt','age=27','sex=0']

    //4、分别获取数组中的每一项，然后按照=进行拆分，把拆出来的第一项作为对象的属性名，第二项作为对象的属性值存储起来
    for (var i = 0; i < aryURL.length; i++) {
        var item = aryURL[i],
            aryItem = item.split('='),
            key = aryItem[0],
            value = aryItem[1];
        obj[key] = value;
    }
    return obj;
}

var result = queryURLParameter('http://www.zhufengpeixun.cn/stu/?name=zxt&age=27&sex=0');
console.log(result);//=>{name:'zxt',age:27,sex:0}
