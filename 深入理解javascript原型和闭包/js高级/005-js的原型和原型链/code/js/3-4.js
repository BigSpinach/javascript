// //=>变量提升：var a;  b=AAAFFF111;
// var a = 4;
// function b(x, y, a) {
//     //=>私有作用域：x=1 y=2 a=3
//     console.log(a);//=>3
//     arguments[2] = 10;//=>让第三个传递进来的实参等于10
//     console.log(a);//=>10
// }
// a = b(1, 2, 3);//=>undefined：因为B函数执行没有返回值
// console.log(a);

/*
 * 在JS的非严格模式下
 *  函数的实参集合与形参变量存在“映射”关系：不管其中谁改变了，另外一个都会跟着发生改变
 *  function fn(a){
 *      //=>a=10
 *      arguments[0]=100;
 *      //=>a=100
 *
 *      a=1000;
 *      //=>arguments[0]===1000
 *  }
 *  fn(10);
 *
 *  在JS严格模式下，ARGUMENTS和形参变量的映射关系被切断了，相互之间互不干扰
 */
"use strict";
var a = 4;
function b(x, y, a) {
    console.log(a);//=>3
    arguments[2] = 10;
    console.log(a);//=>3
}
a = b(1, 2, 3);//=>undefined      b()执行完毕，没有返回值，默认返回当前函数本身，一个地址值
console.log(a);







