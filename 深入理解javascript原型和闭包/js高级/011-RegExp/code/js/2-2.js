var str = '珠峰2017珠峰2018';
str = str.replace(/珠峰/g, function () {
    //console.log(arguments[0]);//=>当前本次大正则匹配的结果
    return '珠峰培训';
});
console.log(str);//=>'珠峰培训2017珠峰培训2018'