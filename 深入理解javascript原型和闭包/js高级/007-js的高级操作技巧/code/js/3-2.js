//=>去除最高和最低分数,剩下的值求平均数
function avgFn() {
    var ary = [];
    for (var i = 0; i < arguments.length; i++) {
        ary[ary.length] = arguments[i];
    }
    //=>链式写法
    ary.sort(function (a, b) {
        return a - b;
    }).shift();
    ary.length--;
    //=>利用JOIN和EVAL求和
    return (eval(ary.join('+')) / ary.length).toFixed(2);
}
console.log(avgFn(9.8, 9.6, 9, 8, 8.8, 8.9));