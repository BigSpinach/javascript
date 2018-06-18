// console.log(a);//=>Uncaught ReferenceError: a is not defined JS中当前行代码报错了,下面的代码将不再执行
// var b = 13;
// console.log(b);

//=>JS中的异常信息捕获 try catch finally
//1、捕获到执行的报错(异常)信息
//2、防止浏览器抛出异常错误导致下面都不在执行的问题
// try {
//     //=>需要执行的JS代码
// } catch (e) {
//     //=>如果TRY中的JS代码执行发生了异常,就会执行CATCH中的代码
//     //1)必须要有一个形参变量(我们一般命名为e[error])
//     //2)e中存储了当前代码执行的异常信息
// } finally {
//     //=>不管TRY中代码是否出现异常，最后都会执行FINALLY中的操作
//     //1)真实项目中很少使用finally
//     //2)TRY CATCH必须成对使用
// }

// try {
//     console.log(a);
// } catch (e) {
//     // console.log(e.message);//=>a is not defined 异常信息
//     console.log('您的人品欠费，请先充值');
// }
// var b = 13;
// console.log(b);

//=>我们需要捕获到异常信息(TRY CATCH)，但是上面代码如果报错，我们希望下面的代码不执行(此时我们需要手动抛出异常信息,来阻止下面的代码执行)
// throw new Error('需要抛出的异常信息~~');  //=>JS中手动抛出异常信息的方法 new Error()是创建Error这个内置类的一个实例

// try {
//     console.log(a);
//     var b = 13;
//     console.log(b);
// } catch (e) {
//     console.dir(e);//=>把错误信息发送给服务器进行统计
// }

/*
 * Error：错误
 *    SyntaxError：语法错误
 *    ReferenceError：引用错误（一般都是未定义或者不存在）
 *    TypeError：类型错误
 *    RangeError：范围错误
 */
// throw new Error();
// throw new ReferenceError();