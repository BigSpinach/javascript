// function fn() {
//     var ary = [].slice.call(arguments);
//     console.log(ary);
// }
// fn(10, 20, 30);
// var oList = document.getElementsByTagName('*');
// console.log([].slice.call(oList));

//=>在借用数组原型上的方法把类数组转换为数组的时候
//在IE低版本浏览器中（IE6~8）ARG可以转换，但是元素集合或者节点集合这些类数组是无法借用SLICE转换的，报错：Array.prototype.slice: 'this'不是 JavaScript对象

var oList = document.getElementsByTagName('*');
var ary = Array.prototype.slice.call(oList);

var ary = [];
for (var i = 0; i < oList.length; i++) {
    ary[ary.length] = oList[i];
}
console.log(ary);







