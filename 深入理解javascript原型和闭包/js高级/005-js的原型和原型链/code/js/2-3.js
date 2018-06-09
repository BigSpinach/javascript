//=>基于内置类的原型扩展方法
/*
 * 1、我们新增加的方法最好设置一个前缀：防止我们新增加的方法和内置的方法冲突，把内置方法替换掉了
 */
Array.prototype.myDistinct = function myDistinct() {
    //=>this:ary当前要处理的那个数组
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (typeof obj[item] !== 'undefined') {
            this[i] = this[this.length - 1];
            this.length--;
            i--;
            continue;
        }
        obj[item] = item;
    }
    obj = null;
    return this;//=>实现链式写法，返回去重后的数组，这样执行完成这个方法后，我们还可以继续调取数组中的其它方法
};

var ary = [1, 2, 1, 2, 3, 2, 3, 2, 2];
ary.myDistinct().sort();


//=>链式写法：执行完成一个方法紧跟着就调取下一个方法（执行完成一个方法后，返回的结果依然是当前类的实例，这样就可以继续调取当前类的其它方法操作了）
// ary.sort(function (a, b) {
//     return a - b;
// }).push(100).pop();//=>Uncaught TypeError: ary.sort(...).push(...).pop is not a function
// ary.sort(function (a, b) {
//     return a - b;
// }).push(100).toFixed(2).substring(1).split('').reverse();


