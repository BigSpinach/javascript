//=>变量提升：var foo;
var foo = 'hello';
(function (foo) {
    //=>私有作用域：foo='hello' (我们的foo和外面的foo是不同的变量)
    console.log(foo);
    var foo = foo || 'world';
    console.log(foo);
})(foo);//=>把全局FOO的值当做实参传递给私有作用域中的形参
console.log(foo);

/*
 * &&逻辑与 ||逻辑或
 *   1、在条件判断中
 *    &&：所有条件都为真,整体才为真
 *    ||：只要有一个条件为真，整体就为真
 *
 *   2、在赋值操作中
 *    ||：A||B 首先看A的真假,A为真返回的是A的值,A为假返回B的值(不管B是啥)
 *       1||2 =>1
 *       0||false =>false
 *
 *    &&：A&&B 首先看A的真假,A为假返回A的值,A为真返回B的值
 *       1&&2 =>2
 *       0&&false =>0
 *
 *   3、逻辑与的优先级高于逻辑或
 */
// function fn(num, callBack) {
//     //=>如果NUM没有传递值:让其默认值是0
//     // if (typeof num === 'undefined') num = 0;
//     num = num || 0;//=>真实项目中们应用逻辑或实现默认值的设置操作
//
//     //=>如果CALLBACK传递的是一个函数,就把这个函数执行
//     // if (typeof callBack === 'function') {
//     //     callBack();
//     // }
//     callBack && callBack();
// }
// fn(100, function () {
//
// });

