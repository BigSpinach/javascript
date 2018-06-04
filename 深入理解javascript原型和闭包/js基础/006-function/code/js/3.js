function sum(num1, num2) {
    //=>如果有一个值没有传递的话,我们为了保证结果不是NaN,我们为其设置一个默认的值:0
    // if (num1 === undefined) {
    //     num1 = 0;
    // }
    // if (typeof num2 === "undefined") {//=>项目中常用的
    //     num2 = 0;
    // }
    // typeof num1 === "undefined" ? num1 = 0 : null;
    // typeof num2 === "undefined" ? num2 = 0 : null;
    //=>容错处理
    num1 = num1 || 0;
    num2 = num2 || 0;
    /*扩展：||和&&的语法*/

    var total = num1 + num2;
    total *= 10;
    total = total.toFixed(2);
    console.log(total);
}
sum(10, 20);