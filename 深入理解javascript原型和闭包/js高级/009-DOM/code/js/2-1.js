/*
 * 类数组(类似数组但是不是数组)
 * 1、JS中哪些是类数组
 *  =>arguments
 *  =>HTMLCollection
 *  =>NodeList
 *  ...
 * 2、类数组的结构和数组大部分相似
 *  [12,23,34]
 *    0:12
 *    1:23
 *    2:34
 *    length:3
 *    __proto__:Array.prototype
 *      push
 *      pop
 *      ...
 *      __proto__:Object.prototype
 *
 *  类数组
 *    0:12
 *    1:23
 *    2:34
 *    length:3
 *    callee:函数本身
 *    __proto__:Object.prototype
 *
 * 3、类数组不是Array的实例，不能直接调取Array.prototype的方法
 */
function fn() {
    /*
     * 思路:
     * 1、去掉一个最大和最小的值
     *   ->首先需要把ARG排序(小->大)
     *     ->需要先把ARG转换为数组
     *     ->调取数组中的SORT实现排序
     *   ->把第一个和最后一个去掉即可
     * 2、剩下的数字中先求和,用总和除以剩下的总长度获取到平均数
     */
    //arguments =>存储了传递进来需要计算的数值(实参集合:类数组)
    var ary = [];
    for (var i = 0; i < arguments.length; i++) {
        ary[ary.length] = arguments[i];
    }
    ary.sort(function (a, b) {
        return a - b;
    });
    ary.shift();
    ary.pop();

    return eval(ary.join('+')) / ary.length;//=>利用JOIN先把数组中的每一项拼接为 xxx+xxx+xxx 这样的字符串,然后把字符串转换为JS表达式执行
}
var result = fn(10, 20, 30, 40, 50);
console.log(result);