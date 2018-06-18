//=>去除最高和最低分数,剩下的值求平均数
function avgFn() {
    arguments.__proto__ = Array.prototype;//=>IE浏览器不兼容(IE下为了保护原型链禁止我们使用__proto__)
    arguments.sort(function (a, b) {
        return a - b;
    }).shift();
    arguments.length--;
    return (eval(arguments.join('+')) / arguments.length).toFixed(2);
}
console.log(avgFn(9.8, 9.6, 9, 8, 8.8, 8.9));