// Array.prototype.slice = function () {
//     //=>[native code]
//     //=>this:需要克隆的数组（需要操作的那个数组）
//     var ary = [];
//     for (var i = 0; i < this.length; i++) {
//         ary[ary.length] = this[i];
//     }
//
//     //=>[自己把ARG变为数组的代码]
//     var ary = [];
//     for (var i = 0; i < arguments.length; i++) {
//         ary[ary.length] = arguments[i];
//     }
//
//     //=>汇总规律：如果我们能把SLICE执行，并且能让SLICE中的THIS指向需要处理的ARG这个类数组,那么原有SLICE中的内置代码,相当于在把ARG转换为新数组（不需要自己循环处理）
//     return ary;
// };
// var newAry = [12, 23, 34].slice();


function fn() {
    //=>[].slice  && Array.prototype.slice 找到数组原型上的SLICE方法
    var ary = Array.prototype.slice.call(arguments);
    /*
     * 把类数组转换为数组
     *   =>把ARG中的每一项克隆一份,放在新数组中
     *   =>数组中实现克隆 ARY.SLICE():把原有数组克隆一份一模一样的新数组出来
     * 借用数组原型上的方法，实现将类数组转换为数组，除了SLICE可以这样借用执行，其它的一些数组方法也是可以的，例如：
     * Array.prototype.sort.call(arguments,function(a,b){return a-b;});
     * ...
     */
    ary.sort(function (a, b) {
        return a - b;
    }).shift();
    ary.length--;
    return eval(ary.join('+')) / ary.length;
}
var result = fn(10, 20, 30, 40, 50);
console.log(result);