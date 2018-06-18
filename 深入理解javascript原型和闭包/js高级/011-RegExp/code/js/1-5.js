var reg = /\{(\d+)\}/g;
var str = 'my name is {0}~~';
if (reg.test(str)) {
    //=>reg.test(str) : true
    console.log(reg.lastIndex);//=>14

    //=>如果当前字符串和正则是匹配的，我们进行捕获
    console.log(reg.exec(str));//=>null
}


var reg = /\{(\d+)\}/;
var str = 'my name is {0}~~';
if (reg.test(str)) {
    //=>reg.test(str) : true
    console.log(reg.lastIndex);//=>0
    console.log(reg.exec(str));//=>['{0}','0'...]
}