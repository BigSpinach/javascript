/*
 * 内置类：
 *  [有关于数据类型的]
 *      Number
 *      String
 *      Boolean
 *      Null/Undefined (浏览器不允许我们来操作)
 *      Object
 *          Array
 *          RegExp
 *          Date
 *      Function
 *
 *  [有关DOM元素对象或者元素集合的]
 *      HTMLCollection
 *      NodeList
 *      每一个HTML标签都有一个自己隶属的类：HTMLDivElement..
 *      =>HTMLElement =>Element =>Node =>EventTarget =>Object
 *      ...
 */

// //=>字面量创建方式
// var num = 12;//=>创建出来的结果也是Number类的一个实例,但是它隶属于基本数据类型
// console.log(Object.prototype.toString.call(12));//=>'[object Number]'
//
// //=>构造函数创建方式
// var n = new Number(12);//=>创建出来的结果是Number类的一个实例，它是一个对象数据类型的值，它的原始值(PrimitiveValue)是12
// console.log(n);
//
// console.log(Number.prototype);//=>查看Number类为其实例赋予的属性和方法
// console.log(num.toFixed(2));//=>虽然是基本类型值，但是也是Number的实例，依然可以调取类中的属性和方法（浏览器在执行的时候会默认的把num进行new Number(num)的处理）
// console.log(n.toFixed(2));

//=>对于引用数据类型两种创建方式的区别：仅仅是语法上的区别
// var obj1 = {name: '珠峰培训'};//=>字面量创建方式
// var obj2 = new Object();//=>构造函数创建方式
// obj2['name'] = '珠峰培训';
// var ary1 = [12];//=>创建一个数组存储12
// var ary2 = new Array(12);//=>创建一个数组，长度是12位，每一项都是空
// function fn() {
//     console.log('ok');
// }
// var fn = new Function("console.log('ok')");












