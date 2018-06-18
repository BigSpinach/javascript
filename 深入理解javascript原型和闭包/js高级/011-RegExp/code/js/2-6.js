String.prototype.myFormatTime = function myFormatTime() {
    var ary = this.match(/\d+/g),
        template = arguments[0] || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
    template = template.replace(/\{(\d+)\}/g, function () {
        var value = ary[arguments[1]] || '0';
        value.length < 2 ? value = '0' + value : null;
        return value;
    });
    return template;
};

// var str = '2017-11-07';
// str = str.myFormatTime();
// console.log(str); //=>'2017年11月07日 00时00分00秒'

// var str = '2017-11-07';
// str = str.myFormatTime('{1}-{2} {3}:{4}');
// console.log(str);

// var str = '2017-11-07 17:48:3';
// str = str.myFormatTime('{3}:{4}:{5}');
// console.log(str);

var str = '2017-11-07 17:48:3';
str = str.myFormatTime();
console.log(str);