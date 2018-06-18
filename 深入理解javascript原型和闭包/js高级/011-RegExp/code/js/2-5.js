var str = '2017-11-07 16:37:00';
var reg = /\d+/g,
    ary = str.match(reg);//=>["2017", "11", "07", "16", "37", "00"]

var template = '{0}年{1}月{2}日 {3}时{4}分{5}秒';
//=>{0} ->ary[0] ->2017
//=>{1} ->ary[1] ->11
//=>...
//=>我们首先获取模板中的{n}（同时获取数字n），把数字n作为ary的索引，获取到需要的日期数据，把获取的日期数据整体替换{n}即可
template = template.replace(/\{(\d+)\}/g, function () {
    var index = arguments[1],
        value = ary[index];
    return value;
});
console.log(template);













