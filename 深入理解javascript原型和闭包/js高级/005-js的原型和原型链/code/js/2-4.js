//=>实现(3).plus(2).minus(1) =>4
// Number.prototype.plus = function plus() {
//     var value = Number(arguments[0]) || 0;
//     return this + value;
// };
// Number.prototype.minus = function minus() {
//     var value = Number(arguments[0]) || 0;
//     return this - value;
// };
// console.log((3).plus(2).minus(1));

/*
 Number.prototype.plus = function plus() {
 if (arguments.length === 0) return this;
 if (typeof arguments[0] != 'number') return this;
 return this + arguments[0];
 }
 Number.prototype.minus = function minus() {
 if (arguments.length === 0) return this;
 if (typeof arguments[0] != 'number') return this;
 return this - arguments[0];
 }
 console.log((3).plus(2).minus(1))*/

//=>重写数组的SLICE方法，要求：
//1、和内置的slice方法作用一模一样
//2、考虑一些传递参数的情况
//slice(n,m) 正常
//A、n和m都不传
//B、只传递一个
//C、传递两个及以上
//D、n和m不是有效数字、或者是小数、或者n>m了、或者负数...
//...
//3、在实现的过程中，不能使用数组内置的方法
// Array.prototype.mySilce = function (n, m) {
//     return this.slice(n, m);
// };
//=>每一组至少出一份答案











