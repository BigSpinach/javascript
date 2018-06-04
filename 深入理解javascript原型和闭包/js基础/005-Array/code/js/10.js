//=>递归?
//函数自己调用自己
// function fn(num) {
//     console.log(num);
//     if (num === 0) {
//         return;
//     }
//     fn(num - 1);
// }
// fn(10);

//=>面试题：1~100之间，把所有能被3并且能被5整除的获取到，然后累加求和

//=>方案一
// var total = null;
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//         total += i;
//     }
// }
// console.log(total);//=>315

//=>方案二：递归
// function fn(num) {
//     if (num > 100) {
//         return 0;
//     }
//     if (num % 15 === 0) {
//         return num + fn(num + 1);
//     }
//     return fn(num + 1);
// }
// console.log(fn(1));
// 1 -> fn(2)
// 2 -> fn(3)
// ...
// 15-> 15+fn(16)
//         16-> 15+fn(17)
//         ...
//         30-> 15+fn(30)
//           -> 15+30+fn(31)
//           ...
//           15+30+45+60+75+90+fn(101)
//           15+30+45+60+75+90+0

//=>需求：1~10以内的所有偶数乘积
function fn(num) {
    if (num <= 1) {
        return 1;
    }
    if (num % 2 === 0) {
        return num * fn(num - 1);
    }
    return fn(num - 1);
    //->return 10*fn(9)
    //->return 10*fn(8)
    //->return 10*8*fn(7)
    //...
    //->return 10*8*6*4*2*fn(1)
    //->return 10*8*6*4*2*1
}
var result = fn(10);
console.log(result);