function avgFn() {
    //=>借用数据原型上的SLICE方法,实现将类数组转换为数组
    //原理：执行数组原型上的SLICE方法,让方法中的THIS指向要转换的类数组,这样在执行内置代码的时候,THIS已经变为ARG,相当于在操作ARG
    //前提：必须是类数组才可以,因为类数组虽然不是数组,但是它的结构和数组基本上类似,也就是操作数组的那些循环判断等JS语句,同样也能操作ARG这种类数组
    //=>类数组不仅可以借用SLICE，Array原型上的大部分方法都可以借来使用(原理都是THIS改变)
    var ary = Array.prototype.slice.call(arguments);
    ary.sort(function (a, b) {
        return a - b;
    }).shift();
    ary.length--;
    return (eval(ary.join('+')) / ary.length).toFixed(2);
}
console.log(avgFn(9.8, 9.6, 9, 8, 8.8, 8.9));

/*
 * 数组中实现克隆
 *   ary.slice()
 */
// Array.prototype.slice = function slice() {
//     //=>this:需要克隆的数组
//     //[NATIVE CODE]
//     var ary = [];
//     for (var i = 0; i < this.length; i++) {
//         ary[ary.length] = this[i];
//     }
//
//     //把ARG克隆成数组
//     var ary = [];
//     for (var i = 0; i < arguments.length; i++) {
//         ary[ary.length] = arguments[i];
//     }
//
//     //=>如果我们可以把SLICE执行,并且让方法中的THIS指向ARG,相当于把类数组转换为数组
//     //=>1、让SLICE执行
//     // Array.prototype.slice()
//     // [].__proto__.slice();
//     // [].slice();
//     //=>2、让SLICE中的THIS变为ARG
//     Array.prototype.slice.call(arguments)
//
//
//     return ary;
// };
// ary.slice();











