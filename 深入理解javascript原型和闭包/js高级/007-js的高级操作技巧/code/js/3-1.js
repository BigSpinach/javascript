//=>去除最高和最低分数,剩下的值求平均数
function avgFn() {
    //arguments：类数组,它不是Array的实例,不能调取数组中的方法
    //console.log(arguments instanceof Array);//=>FALSE

    //=>1、先把实参集合进行排序(去除第一个和最后一个)
    //1)先把ARG(类数组)转换为数组
    var ary = [];
    for (var i = 0; i < arguments.length; i++) {
        ary[ary.length] = arguments[i];
    }
    ary.sort(function (a, b) {
        return a - b;
    });
    ary.shift();
    ary.pop();

    //=>2、把集合中剩下的值求平均数(求和后除以长度即可)
    var total = null;
    for (var j = 0; j < ary.length; j++) {
        total += ary[j];
    }
    return (total / ary.length).toFixed(2);
}
console.log(avgFn(9.8, 9.6, 9, 8, 8.8, 8.9));