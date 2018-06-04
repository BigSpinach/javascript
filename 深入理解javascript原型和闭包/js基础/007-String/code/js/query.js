var str = 'https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1';
//=>{wd:'javascript',rsv_spt:1,issp:1}

//=>方案一：
var questionIndex = str.indexOf('?');
str = str.substring(questionIndex + 1);
// console.log(str);//->'wd=javascript&rsv_spt=1&issp=1'
var ary = str.split('&');
// console.log(ary);//->["wd=javascript", "rsv_spt=1", "issp=1"]
var obj = {};
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    var curAry = cur.split('='),//->['wd','javascript']
        key = curAry[0],
        value = curAry[1];
    obj[key] = value;
}
console.log(obj);