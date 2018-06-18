var oList = document.getElementsByTagName('*');

// var ary = [];
// for (var i = 0; i < oList.length; i++) {
//     ary[ary.length] = oList[i];
// }

// var ary = [].slice.call(oList);
// console.log(ary);
//=>在IE6~8低版本浏览器中，使用上面的操作，会报错（ Array.prototype.slice: 'this' 不是 JavaScript 对象）
//=>但是ARG这个类数组在所有浏览器中使用上述办法转换为数组都兼容，只有元素集合或者节点集合这种类数组才不兼容低版本浏览器

//=>TRY CATCH：浏览器异常信息捕获
// console.log(a);//=>Uncaught ReferenceError: a is not defined  当前行代码报错，会在浏览器中抛出异常信息，导致浏览器不会继续向下渲染代码了（当前行代码报错，下面的代码都不在执行了）
// var b = 13;
// console.log(b);

try {
    console.log(a);
} catch (e) {
    //=>TRY CATCH 可以捕获到浏览器的异常信息
    //1、我们可以知道TRY中代码哪一块报错了，报错信息是什么（如果TRY中的代码报错了，会自动进入CATCH中，执行CATCH中的代码）
    // console.dir(e);//=>e.message e.stack 存储了错误的信息

    //2、阻止浏览器异常信息抛出（也就是不会再控制台报红色错误了），即使当前的代码报错了，也不会影响后面的代码执行
}
var b = 13;
console.log(b);








