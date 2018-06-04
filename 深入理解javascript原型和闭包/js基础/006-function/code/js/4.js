/*
 "use strict";
 function sum() {
 console.log(arguments.callee);//=>Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
 }
 sum(10, 20, '珠峰', {name: '珠峰'});*/

// function sum() {
//     var total = null;
//     for (var i = 0; i < arguments.length; i++) {
//         var cur = arguments[i];//=>每一轮循环获取当前传递的那个实参值
//         //=>为了防止字符串+数字是字符串拼接不是数学的累加，我们最好把其它数据类型首先转换为number类型
//         cur = Number(cur);
//
//         //=>为了防止传递的是非有效数字(数字+NaN=NaN)，我们最好做一下非有效数字的检测：有效数字才进行累加
//         if (isNaN(cur) === false) {
//             total += cur;
//         }
//     }
//     console.log(total);
// }

//=>任意数求和
function sum() {
    var total = null;
    for (var i = 0; i < arguments.length; i++) {
        var cur = Number(arguments[i]);
        !isNaN(cur) ? total += cur : null;
    }
    console.log(total);
}
sum(10, 20, 30);
sum();
sum(10, 20, '30');
sum(10, 20, 30, '珠峰');





